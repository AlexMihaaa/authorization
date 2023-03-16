import { createAction, props } from '@ngrx/store'

import { ModalTypesEnum } from './modal-types.enum'

export const openModalForm = createAction(
  ModalTypesEnum.MODAL_OPEN,
  props<{ nameForm: string }>()
)
export const closeModalForm = createAction(
  ModalTypesEnum.MODAL_CLOSE,
  props<{ nameForm: string }>()
)
