import { TestBed } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

import { AuthService } from './auth.service'
import { AuthRequestInterface } from '../../../store/auth/models/authRequest.interface'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { environment } from '../../../../environments/environment'

describe('AuthService', () => {
  let service: AuthService
  let httpMock: HttpTestingController

  const userAuth: AuthRequestInterface = {
    login: 'David',
    password: '1234',
  }

  const currentUser: CurrentUserInterface = {
    id: 12,
    login: 'David',
    access_token: '2342323crrs',
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(AuthService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('Регистрация пользователя', () => {
    service.register(userAuth).subscribe((data: CurrentUserInterface) => {
      expect(data).toBeTruthy()
    })
    const req = httpMock.expectOne(environment.apiUrl + '/auth/sign-up')
    expect(req.request.method).toBe('POST')
    req.flush(currentUser)
  })

  it('Логин пользователя', () => {
    service.login(userAuth).subscribe((data: CurrentUserInterface) => {
      expect(data).toBeTruthy()
    })
    const req = httpMock.expectOne(environment.apiUrl + '/auth/sign-in')
    expect(req.request.method).toBe('POST')
    req.flush(currentUser)
  })
  afterEach(() => httpMock.verify())
})
