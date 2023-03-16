import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { AsyncPipe, NgIf } from '@angular/common'
import { Observable } from 'rxjs'

import {
  isSubmittingSelector,
  validationsErrorsSelector,
} from '../../../../../../store/auth/selectors/auth.selector'
import { closeModalForm } from '../../../../../../store/modal/modal.actions'
import { AppStateInterface } from '../../../../../../shared/types/appState.interface'
import { BackEndErrorsInterface } from '../../../../../../shared/types/backEndErrors.interface'
import { AuthRequestInterface } from '../../../../../../store/auth/models/authRequest.interface'
import { loginAction } from '../../../../../../store/auth/actions/login.action'
import { BackendErrorMessageComponent } from '../../../../../../shared/components/backend-error-message/backend-error-message.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, BackendErrorMessageComponent, NgIf],
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  isSubmitting$?: Observable<boolean>
  backEndErrors$?: Observable<BackEndErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues() {
    this.isSubmitting$ = this.store.select(isSubmittingSelector)
    this.backEndErrors$ = this.store.select(validationsErrorsSelector)
  }

  initializeForm() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submit() {
    const request: AuthRequestInterface = this.form.value
    this.store.dispatch(loginAction({ request }))
  }

  close() {
    this.store.dispatch(closeModalForm({ nameForm: 'registration' }))
  }
}
