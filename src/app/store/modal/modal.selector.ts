import { createFeatureSelector, createSelector } from '@ngrx/store'

import { StateInterfaceModal } from './models/state.interface'

export const modalFeatureSelector =
  createFeatureSelector<StateInterfaceModal>('modal')

export const nameFormSelector = createSelector(
  modalFeatureSelector,
  (modalState: StateInterfaceModal) => modalState.nameForm
)
