import { Injectable } from '@angular/core'
import { mergeMap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import * as ModalActions from './modal.actions'
import { ModalService } from '../services/modal.service'

@Injectable()
export class FormEffects {
  constructor(private actions$: Actions, private modalService: ModalService) {}

  openForm$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ModalActions.openModalForm),
        mergeMap(async form => {
          return this.modalService.createModal(form.form)
        })
      ),
    { dispatch: false }
  )
}
