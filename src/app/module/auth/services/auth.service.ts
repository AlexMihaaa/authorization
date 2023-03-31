import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { environment } from '../../../../environments/environment'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { AuthRequestInterface } from '../../../store/auth/models/authRequest.interface'
import { AuthResponseInterface } from '../../../store/auth/models/authResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiUrl + '/auth'
  constructor(private http: HttpClient) {}

  register(data: AuthRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<CurrentUserInterface>(`${this.url}/register`, data, {
      withCredentials: true,
    })
  }

  login(data: AuthRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<CurrentUserInterface>(`${this.url}/login`, data, {
      withCredentials: true,
    })
  }

  logout(): Observable<Pick<AuthResponseInterface, 'status'>> {
    return this.http.get<Pick<AuthResponseInterface, 'status'>>(
      `${this.url}/logout`,
      {
        withCredentials: true,
      }
    )
  }

  refreshToken(): Observable<AuthResponseInterface> {
    return this.http.get<AuthResponseInterface>(`${this.url}/refresh`, {
      withCredentials: true,
    })
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http.get<CurrentUserInterface>(`${this.url}/me`, {
      withCredentials: true,
    })
  }
}
