import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'

import { LoginComponent } from './login.component'
import { initialState } from '../../../../../../store/auth/reducers/auth.reducer'
import { AuthStateInterface } from '../../../../../../store/auth/models/authState.interface'
import { closeModalForm } from '../../../../../../store/modal/modal.actions'
import {
  loginAction,
  loginSuccessAction,
} from '../../../../../../store/auth/actions/login.action'
import { AuthRequestInterface } from '../../../../../../store/auth/models/authRequest.interface'
import { CurrentUserInterface } from '../../../../../../shared/types/currentUser.interface'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>
  let store: MockStore<AuthStateInterface>
  const form = {
    login: 'David',
    password: '1234',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents()

    store = TestBed.inject(MockStore)
    spyOn(store, 'dispatch').and.callThrough()

    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Создаем Action и отправляем его. Закрытие модального окна', () => {
    component.close()
    const closeModalFormAction = closeModalForm({ nameForm: 'login' })
    expect(store.dispatch).toHaveBeenCalledWith(closeModalFormAction)
  })

  it('Отправка формы.', () => {
    const request: AuthRequestInterface = form
    component.submit()
    const loginActionTest = loginAction({ request })
    expect(store.dispatch).toHaveBeenCalledWith(loginActionTest)
  })

  it('Получение данных пользователя после успешного входа.', () => {
    const currentUser: CurrentUserInterface = {
      id: 1,
      login: 'David',
      access_token: 'Token12354',
    }
    component.submit()
    const loginSuccessActionTest = loginSuccessAction({ currentUser })
    // store.dispatch(loginSuccessActionTest)
    expect(store.dispatch).toHaveBeenCalledWith(loginSuccessActionTest)
    // component.isSubmitting$?.subscribe(data => {
    //   expect(data).toBeTruthy()
    // })
  })
})
