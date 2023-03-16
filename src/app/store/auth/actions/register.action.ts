import { props, createAction } from '@ngrx/store'

import { ActionTypes } from '../actionTypes'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { AuthRequestInterface } from '../models/authRequest.interface'
import { BackEndErrorsInterface } from '../../../shared/types/backEndErrors.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: AuthRequestInterface }>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ error: BackEndErrorsInterface }>()
)
