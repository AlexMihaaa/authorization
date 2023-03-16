import { createReducer, on } from '@ngrx/store'

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action'
import { AuthStateInterface } from '../models/authState.interface'

export const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationsErrors: null,
}

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationsErrors: null,
  })),
  on(registerSuccessAction, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(registerFailureAction, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    validationsErrors: action.error,
  })),

  on(loginAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationsErrors: null,
  })),
  on(loginSuccessAction, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(loginFailureAction, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    validationsErrors: action.error,
  }))
)
