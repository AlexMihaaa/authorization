import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendErrorMessageComponent } from './backend-error-message.component';

describe('BackendErrorMessageComponent', () => {
  let component: BackendErrorMessageComponent;
  let fixture: ComponentFixture<BackendErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendErrorMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
