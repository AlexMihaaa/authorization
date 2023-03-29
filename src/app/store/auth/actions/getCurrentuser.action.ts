import { createAction, props } from '@ngrx/store'

import { ActionTypesEnum } from '../actionTypes.enum'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'

export const getCurrentUserAction = createAction(
  ActionTypesEnum.GET_CURRENT_USER
)

export const getCurrentUserSuccessAction = createAction(
  ActionTypesEnum.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const getCurrentUserFailureAction = createAction(
  ActionTypesEnum.GET_CURRENT_USER_FAILURE
)
