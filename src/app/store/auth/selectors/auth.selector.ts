import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AuthStateInterface } from '../models/authState.interface'
import { AppStateInterface } from '../../../shared/types/appState.interface'

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationsErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationsErrors
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
)

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
)
