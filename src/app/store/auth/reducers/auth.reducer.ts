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
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentuser.action'
import {
  logoutAction,
  logoutFailureAction,
  logoutSuccessAction,
} from '../actions/logout.action'
import { AuthStateInterface } from '../models/authState.interface'

export const initialState: AuthStateInterface = {
  isLoggedIn: false,
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationsErrors: null,
}

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationsErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationsErrors: action.error,
    })
  ),

  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationsErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationsErrors: action.error,
    })
  ),

  on(
    logoutAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationsErrors: null,
    })
  ),
  on(
    logoutSuccessAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      currentUser: null,
    })
  ),
  on(
    logoutFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      currentUser: null,
    })
  ),

  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
)
