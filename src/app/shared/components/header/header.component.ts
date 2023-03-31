import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewContainerRef,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common'
import { Observable } from 'rxjs'
import { MatButtonModule } from '@angular/material/button'

import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../store/auth/selectors/auth.selector'
import { ModalService } from '../../../module/auth/modal/services/modal.service'
import { LoaderComponent } from '../loader/loader.component'
import { openModalForm } from '../../../store/modal/modal.actions'
import { CurrentUserInterface } from '../../types/currentUser.interface'
import { AppStateInterface } from '../../types/appState.interface'
import { logoutAction } from '../../../store/auth/actions/logout.action'

@Component({
  imports: [LoaderComponent, NgIf, AsyncPipe, JsonPipe, MatButtonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isLoggedIn$?: Observable<boolean | null>
  isAnonymous$?: Observable<boolean | null>
  currentUser$?: Observable<CurrentUserInterface | null>

  constructor(
    private modalService: ModalService,
    private vcRef: ViewContainerRef,
    private store: Store<AppStateInterface>
  ) {
    modalService.viewContainerRef = vcRef
  }

  ngOnInit() {
    this.initializeValues()
  }

  initializeValues() {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector)
    this.isAnonymous$ = this.store.select(isAnonymousSelector)
    this.currentUser$ = this.store.select(currentUserSelector)
  }

  logout() {
    this.store.dispatch(logoutAction())
  }

  showModal(authModal: string) {
    this.store.dispatch(openModalForm({ nameForm: authModal }))
  }
}
