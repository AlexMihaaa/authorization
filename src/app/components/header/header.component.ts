import { Component, ViewContainerRef } from '@angular/core'
import { Store } from '@ngrx/store'
import { AsyncPipe, NgIf } from '@angular/common'

import { ModalService } from '../../services/modal.service'
import * as ModalActions from '../../store/modal.actions'
import { AppStateInterface } from '../../models/app-state.interface'
import { LoaderComponent } from '../loader/loader.component'

@Component({
  imports: [LoaderComponent, NgIf, AsyncPipe],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent {
  constructor(
    private modalService: ModalService,
    private vcRef: ViewContainerRef,
    private store: Store<AppStateInterface>
  ) {
    modalService.viewContainerRef = vcRef
  }

  showModal(authModal: string) {
    this.store.dispatch(ModalActions.openModalForm({ form: authModal }))
  }
}
