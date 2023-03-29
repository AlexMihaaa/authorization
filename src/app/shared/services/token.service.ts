import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  set(key: string, data: string): void {
    localStorage.setItem(key, data)
  }

  get(key: string): string | null {
    return localStorage.getItem(key)
  }

  clear(): void {
    localStorage.clear()
  }
}
