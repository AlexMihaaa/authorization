import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { environment } from '../../../../environments/environment'
import { AuthRequestInterface } from '../../../store/auth/models/authRequest.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiUrl + '/auth'
  constructor(private http: HttpClient) {}

  register(data: AuthRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<CurrentUserInterface>(`${this.url}/sign-up`, data)
  }

  login(data: AuthRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<CurrentUserInterface>(`${this.url}/sign-in`, data)
  }

  getCurrentUser(): void {}
}
