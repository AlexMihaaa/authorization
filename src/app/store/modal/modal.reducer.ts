import { createReducer, on } from '@ngrx/store'

import { StateInterfaceModal } from './models/state.interface'
import { closeModalForm, openModalForm } from './modal.actions'

export const initialStateModal: StateInterfaceModal = {
  isLoading: false,
  nameForm: '',
  error: null,
}

export const modalReducer = createReducer(
  initialStateModal,
  on(openModalForm, (state, action) => ({
    ...state,
    nameForm: action.nameForm,
  })),

  on(closeModalForm, state => ({
    ...state,
    nameForm: '',
  }))
)
