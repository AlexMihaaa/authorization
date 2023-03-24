import { TestBed } from '@angular/core/testing'

import { TokenService } from './token.service'

describe('TokenService', () => {
  let service: TokenService

  beforeEach(() => {
    let store: { [key: string]: string } = {}
    const mockLocalStorage = {
      getItem: (key: string): string | null => {
        return key in store ? store[key] : null
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`
      },
      removeItem: (key: string) => {
        delete store[key]
      },
      clear: () => {
        store = {}
      },
    }
    TestBed.configureTestingModule({})
    service = TestBed.inject(TokenService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('Запись токена в localStorage', () => {
    service.set('token', '23432rdfsf34')
    localStorage.setItem('token', '23432rdfsf34')
    expect(localStorage.getItem('token')).toEqual('23432rdfsf34')
  })

  it('Получение токена из localStorage', () => {
    localStorage.setItem('token', '23432rdfsf34')
    service.get('token')
    expect(localStorage.getItem('token')).toEqual('23432rdfsf34')
  })
})
