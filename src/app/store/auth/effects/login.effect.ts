import { switchMap, map, catchError, of, tap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action'
import { AuthService } from '../../../module/auth/services/auth.service'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { TokenService } from '../../../shared/services/token.service'
import { closeModalForm } from '../../modal/modal.actions'
import { AppStateInterface } from '../../../shared/types/appState.interface'

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private store: Store<AppStateInterface>
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.tokenService.set('token', currentUser.access_token)
            return loginSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(loginFailureAction({ error: errorResponse.error }))
          )
        )
      })
    )
  )
  loginAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigate(['/home'])
          this.store.dispatch(closeModalForm({ nameForm: 'login' }))
        })
      ),
    { dispatch: false }
  )
}
