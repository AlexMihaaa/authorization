import { switchMap, map, catchError, of, tap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'
import { AuthService } from '../../../module/auth/services/auth.service'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { TokenService } from '../../../shared/services/token.service'
import { closeModalForm } from '../../modal/modal.actions'
import { AppStateInterface } from '../../../shared/types/appState.interface'

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private store: Store<AppStateInterface>
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.tokenService.set('token', currentUser.access_token)
            return registerSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(registerFailureAction({ error: errorResponse.error }))
          )
        )
      })
    )
  )
  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigate(['/home'])
          this.store.dispatch(closeModalForm({ nameForm: 'registration' }))
        })
      ),
    { dispatch: false }
  )
}
