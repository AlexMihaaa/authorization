import { ChangeDetectionStrategy, Component } from '@angular/core'
import { AsyncPipe, NgIf, NgSwitch, NgSwitchCase } from '@angular/common'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { closeModalForm } from '../../../../../store/modal/modal.actions'
import { nameFormSelector } from '../../../../../store/modal/modal.selector'

@Component({
  selector: 'app-modal-windows',
  templateUrl: './modal-windows.component.html',
  styleUrls: ['./modal-windows.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LoginComponent,
    NgSwitch,
    NgSwitchCase,
    SignupComponent,
    AsyncPipe,
    NgIf,
  ],
})
export class ModalWindowsComponent {
  modalForm$: Observable<string | null> = this.store.select(nameFormSelector)

  constructor(private store: Store) {}

  close(nameForm: string) {
    this.store.dispatch(closeModalForm({ nameForm }))
  }
}
