import { Injectable } from '@angular/core'
import { tap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import { ModalService } from '../../module/auth/modal/services/modal.service'
import { closeModalForm, openModalForm } from './modal.actions'

@Injectable()
export class FormEffects {
  constructor(private actions$: Actions, private modalService: ModalService) {}

  openForm$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(openModalForm),
        tap(() => this.modalService.createModal())
      ),
    { dispatch: false }
  )

  closeForm$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(closeModalForm),
        tap(() => this.modalService.removeModal())
      ),
    { dispatch: false }
  )
}
