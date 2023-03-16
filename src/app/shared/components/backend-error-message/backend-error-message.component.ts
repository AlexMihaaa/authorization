import { Component, Input } from '@angular/core'

import { BackEndErrorsInterface } from '../../types/backEndErrors.interface'

@Component({
  selector: 'app-backend-error-message',
  templateUrl: './backend-error-message.component.html',
  styleUrls: ['./backend-error-message.component.scss'],
  standalone: true,
})
export class BackendErrorMessageComponent {
  @Input() backendErrorMessage?: BackEndErrorsInterface | null
}
