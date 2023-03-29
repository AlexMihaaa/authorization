import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { importProvidersFrom, isDevMode } from '@angular/core'

import { AppComponent } from './app/app.component'
import { routes } from './app/app-routing.module'
import { authReducer } from './app/store/auth/reducers/auth.reducer'
import { modalReducer } from './app/store/modal/modal.reducer'
import { LoginEffect } from './app/store/auth/effects/login.effect'
import { FormEffects } from './app/store/modal/modal.effects'
import { RegisterEffect } from './app/store/auth/effects/register.effect'
import { GetCurrentUserEffectEffect } from './app/store/auth/effects/getCurrentUser.effect'
import { TokenService } from './app/shared/services/token.service'
import { AuthInterceptor } from './app/shared/services/auth.interceptor'
import { LogoutUserEffect } from './app/store/auth/effects/logout.effect'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot({ modal: modalReducer, auth: authReducer }, {}),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
      EffectsModule.forRoot([
        FormEffects,
        RegisterEffect,
        LoginEffect,
        GetCurrentUserEffectEffect,
        LogoutUserEffect,
      ]),
      HttpClientModule,
      TokenService
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
