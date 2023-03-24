import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { StoreModule } from '@ngrx/store'

import { ModalWindowsComponent } from './modal-windows.component'
import { AuthStateInterface } from '../../../../../store/auth/models/authState.interface'
import { closeModalForm } from '../../../../../store/modal/modal.actions'

describe('ModalWindowsComponent', () => {
  let component: ModalWindowsComponent
  let fixture: ComponentFixture<ModalWindowsComponent>
  let store: MockStore<AuthStateInterface>

  const initialState = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationsErrors: null,
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalWindowsComponent, StoreModule.forRoot({})],
      providers: [provideMockStore({ initialState })],
    }).compileComponents()

    store = TestBed.inject(MockStore)

    fixture = TestBed.createComponent(ModalWindowsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should dispatch an action to close the modal form', () => {
    const nameForm = 'login'
    spyOn(store, 'dispatch')
    component.close(nameForm)
    expect(store.dispatch).toHaveBeenCalledWith(closeModalForm({ nameForm }))
  })
})
