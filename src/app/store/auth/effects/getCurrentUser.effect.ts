import { switchMap, map, catchError, of, tap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'

import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentuser.action'
import { AuthService } from '../../../module/auth/services/auth.service'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { TokenService } from '../../../shared/services/token.service'
import { logoutAction } from '../actions/logout.action'

@Injectable()
export class GetCurrentUserEffectEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.tokenService.get('token')
        if (!token) {
          return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser })
          }),
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.authService.refreshToken().pipe(
                tap(data => {
                  this.tokenService.set('token', data.access_token)
                })
              )
            }
            return of(getCurrentUserFailureAction())
          })
        )
      })
    )
  )

  getRefreshTokenUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserFailureAction),
      switchMap(() => {
        return this.authService.refreshToken().pipe(
          map(data => {
            this.tokenService.set('token', data.access_token)
            return getCurrentUserAction()
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.tokenService.clear()
            return of(logoutAction())
          })
        )
      })
    )
  )
}
