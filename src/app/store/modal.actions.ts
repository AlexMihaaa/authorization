import { createAction, props } from '@ngrx/store'

export enum ModalActions {
  OpenModal = '[MODAL] Open',
}

export const openModalForm = createAction(
  ModalActions.OpenModal,
  props<{ form: string }>()
)
