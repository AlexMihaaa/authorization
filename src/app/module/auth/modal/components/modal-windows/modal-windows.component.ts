import { Component } from '@angular/core'
import { LoginComponent } from './login/login.component'
import { NgSwitch, NgSwitchCase } from '@angular/common'
import { Store } from '@ngrx/store'

import { ModalService } from '../../services/modal.service'
import { SignupComponent } from './signup/signup.component'
import { closeModalForm } from '../../../../../store/modal/modal.actions'
import { AppStateInterface } from '../../../../../store/modal/models/app-state.interface'

@Component({
  selector: 'app-modal-windows',
  templateUrl: './modal-windows.component.html',
  styleUrls: ['./modal-windows.component.scss'],
  standalone: true,
  imports: [LoginComponent, NgSwitch, NgSwitchCase, SignupComponent],
})
export class ModalWindowsComponent {
  constructor(
    public modalService: ModalService,
    private store: Store<AppStateInterface>
  ) {}

  close(nameForm: string) {
    this.store.dispatch(closeModalForm({ nameForm }))
  }
}
