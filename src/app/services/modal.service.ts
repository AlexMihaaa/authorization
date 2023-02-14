import { Injectable, ViewContainerRef } from '@angular/core'
import { ModalWindowsComponent } from '../components/modal-windows/modal-windows.component'
import { take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modalForm = ''
  viewContainerRef?: ViewContainerRef

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  createModal(authForm: string) {
    const component = this.viewContainerRef?.createComponent(
      ModalWindowsComponent
    )
    this.modalForm = authForm
    component?.instance.closeModal
      .pipe(take(1))
      .subscribe(() => this.removeModal(component))
  }

  removeModal(component: any) {
    component?.destroy()
  }
}
