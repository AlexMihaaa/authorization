import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core'

import { ModalWindowsComponent } from '../components/modal-windows/modal-windows.component'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modalForm = ''
  viewContainerRef?: ViewContainerRef
  public component?: ComponentRef<ModalWindowsComponent>

  createModal(authForm: string) {
    this.component = this.viewContainerRef?.createComponent(
      ModalWindowsComponent
    )
    this.modalForm = authForm
  }

  removeModal() {
    this.component?.destroy()
  }
}
