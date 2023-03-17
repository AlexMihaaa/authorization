import { createAction, props } from '@ngrx/store'

import { ActionTypesEnum } from '../actionTypes.enum'
import { AuthRequestInterface } from '../models/authRequest.interface'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { BackEndErrorsInterface } from '../../../shared/types/backEndErrors.interface'

export const loginAction = createAction(
  ActionTypesEnum.LOGIN,
  props<{ request: AuthRequestInterface }>()
)

export const loginSuccessAction = createAction(
  ActionTypesEnum.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailureAction = createAction(
  ActionTypesEnum.LOGIN_FAILURE,
  props<{ error: BackEndErrorsInterface }>()
)
