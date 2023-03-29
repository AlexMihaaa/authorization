import { switchMap, map, catchError, of } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {
  logoutAction,
  logoutFailureAction,
  logoutSuccessAction,
} from '../actions/logout.action'
import { AuthService } from '../../../module/auth/services/auth.service'
import { TokenService } from '../../../shared/services/token.service'

@Injectable()
export class LogoutUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutAction),
      switchMap(() => {
        return this.authService.logout().pipe(
          map(() => {
            this.tokenService.clear()
            this.router.navigate(['/'])
            return logoutSuccessAction()
          }),
          catchError(() => {
            return of(logoutFailureAction())
          })
        )
      })
    )
  )
}
