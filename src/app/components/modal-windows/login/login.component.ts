import { Component } from '@angular/core'

import { ModalWindowsComponent } from '../modal-windows.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent {
  constructor(private ModalWindowsComponent: ModalWindowsComponent) {}

  close() {
    this.ModalWindowsComponent.close(ModalWindowsComponent)
  }
}
