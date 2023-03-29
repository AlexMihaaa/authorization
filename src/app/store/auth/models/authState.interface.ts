import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { BackEndErrorsInterface } from '../../../shared/types/backEndErrors.interface'

export interface AuthStateInterface {
  isLoggedIn: boolean | null
  isLoading: boolean
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  validationsErrors: BackEndErrorsInterface | null
}
