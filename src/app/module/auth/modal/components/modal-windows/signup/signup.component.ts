import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AsyncPipe, NgIf } from '@angular/common'

import {
  isSubmittingSelector,
  validationsErrorsSelector,
} from '../../../../../../store/auth/selectors/auth.selector'
import { AppStateInterface } from '../../../../../../shared/types/appState.interface'
import { AuthService } from '../../../../services/auth.service'
import { registerAction } from '../../../../../../store/auth/actions/register.action'
import { AuthRequestInterface } from '../../../../../../store/auth/models/authRequest.interface'
import { BackEndErrorsInterface } from '../../../../../../shared/types/backEndErrors.interface'
import { BackendErrorMessageComponent } from '../../../../../../shared/components/backend-error-message/backend-error-message.component'
import { closeModalForm } from '../../../../../../store/modal/modal.actions'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, BackendErrorMessageComponent, NgIf],
  providers: [AuthService],
})
export class SignupComponent implements OnInit {
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
    this.store.dispatch(registerAction({ request }))
  }

  close() {
    this.store.dispatch(closeModalForm({ nameForm: 'registration' }))
  }
}
