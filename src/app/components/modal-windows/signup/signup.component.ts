import { Component } from '@angular/core'

import { ModalWindowsComponent } from '../modal-windows.component'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
})
export class SignupComponent {
  constructor(private ModalWindowsComponent: ModalWindowsComponent) {}

  close() {
    this.ModalWindowsComponent.close(ModalWindowsComponent)
  }
}
