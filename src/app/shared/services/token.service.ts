import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.log('Ошибка сохранения токена.', error)
    }
  }

  get(key: string): any {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      console.log('Ошибка получения токена.', error)
      return null
    }
  }
}
