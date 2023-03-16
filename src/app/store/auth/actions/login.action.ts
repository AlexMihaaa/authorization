import { createAction, props } from '@ngrx/store'

import { ActionTypes } from '../actionTypes'
import { AuthRequestInterface } from '../models/authRequest.interface'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { BackEndErrorsInterface } from '../../../shared/types/backEndErrors.interface'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: AuthRequestInterface }>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ error: BackEndErrorsInterface }>()
)
