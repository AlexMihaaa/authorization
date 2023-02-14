import { createReducer, on } from '@ngrx/store'

import { StateInterfaceModal } from '../models/state.interface'
import * as ModalActions from './modal.actions'

export const initialStateModal: StateInterfaceModal = {
  isLoading: false,
  form: '',
  error: null,
}

export const modalReducer = createReducer(
  initialStateModal,
  on(ModalActions.openModalForm, (state, action) => ({
    ...state,
    form: action.form,
  }))
)
