import { props, createAction } from '@ngrx/store'

import { ActionTypesEnum } from '../actionTypes.enum'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { AuthRequestInterface } from '../models/authRequest.interface'
import { BackEndErrorsInterface } from '../../../shared/types/backEndErrors.interface'

export const registerAction = createAction(
  ActionTypesEnum.REGISTER,
  props<{ request: AuthRequestInterface }>()
)

export const registerSuccessAction = createAction(
  ActionTypesEnum.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(
  ActionTypesEnum.REGISTER_FAILURE,
  props<{ error: BackEndErrorsInterface }>()
)
