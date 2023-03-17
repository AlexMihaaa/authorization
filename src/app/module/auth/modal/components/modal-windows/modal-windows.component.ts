import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AsyncPipe, NgIf, NgSwitch, NgSwitchCase } from '@angular/common'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { closeModalForm } from '../../../../../store/modal/modal.actions'
import { AppStateInterface } from '../../../../../store/modal/models/app-state.interface'
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
export class ModalWindowsComponent implements OnInit {
  modalForm$!: Observable<string | null>

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
    this.initializeValues()
  }

  initializeValues() {
    this.modalForm$ = this.store.select(nameFormSelector)
  }

  close(nameForm: string) {
    this.store.dispatch(closeModalForm({ nameForm }))
  }
}
