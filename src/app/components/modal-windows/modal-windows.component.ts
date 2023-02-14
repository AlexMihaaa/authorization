import { Component, EventEmitter, Output } from '@angular/core'
import { LoginComponent } from './login/login.component'
import { NgSwitch, NgSwitchCase } from '@angular/common'

import { ModalService } from '../../services/modal.service'
import { SignupComponent } from './signup/signup.component'

@Component({
  selector: 'app-modal-windows',
  templateUrl: './modal-windows.component.html',
  styleUrls: ['./modal-windows.component.scss'],
  standalone: true,
  imports: [LoginComponent, NgSwitch, NgSwitchCase, SignupComponent],
})
export class ModalWindowsComponent {
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>()
  constructor(public modalService: ModalService) {}

  close($event: any) {
    this.closeModal.emit($event)
  }
}
