import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MainPageComponent } from './main-page.component'
import { provideMockStore } from '@ngrx/store/testing'

describe('HomePageComponent', () => {
  let component: MainPageComponent
  let fixture: ComponentFixture<MainPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageComponent],
      providers: [provideMockStore({})],
    }).compileComponents()

    fixture = TestBed.createComponent(MainPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
