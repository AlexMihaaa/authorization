import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  set(key: string, data: any): void {
    localStorage.setItem(key, data)
  }

  get(key: string): any {
    return localStorage.getItem(key)
  }
}
