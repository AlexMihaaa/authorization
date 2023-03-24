import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BackendErrorMessageComponent } from './backend-error-message.component'
import { provideMockStore } from '@ngrx/store/testing'

describe('BackendErrorMessageComponent', () => {
  let component: BackendErrorMessageComponent
  let fixture: ComponentFixture<BackendErrorMessageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendErrorMessageComponent],
      providers: [provideMockStore({})],
    }).compileComponents()

    fixture = TestBed.createComponent(BackendErrorMessageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
