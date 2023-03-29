import { createAction } from '@ngrx/store'

import { ActionTypesEnum } from '../actionTypes.enum'

export const logoutAction = createAction(ActionTypesEnum.LOGOUT)

export const logoutSuccessAction = createAction(ActionTypesEnum.LOGOUT_SUCCESS)

export const logoutFailureAction = createAction(ActionTypesEnum.LOGOUT_FAILURE)
