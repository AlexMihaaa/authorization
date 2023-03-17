import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core'

import { ModalWindowsComponent } from '../components/modal-windows/modal-windows.component'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  viewContainerRef?: ViewContainerRef
  public component?: ComponentRef<ModalWindowsComponent>

  createModal() {
    this.component = this.viewContainerRef?.createComponent(
      ModalWindowsComponent
    )
  }

  removeModal() {
    this.component?.destroy()
  }
}
