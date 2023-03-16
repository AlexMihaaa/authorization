import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { BackEndErrorsInterface } from '../../../shared/types/backEndErrors.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationsErrors: BackEndErrorsInterface | null
}
