import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/components/header/header.component'
import { LoginComponent } from './module/auth/modal/components/modal-windows/login/login.component'
import { ModalService } from './module/auth/modal/services/modal.service'
import { FormEffects } from './store/modal/modal.effects'
import { authReducer } from './store/auth/reducers/register.reducer'
import { modalReducer } from './store/modal/modal.reducer'
import { RegisterEffect } from './store/auth/effects/register.effect'
import { LoginEffect } from './store/auth/effects/login.effect'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    LoginComponent,
    HttpClientModule,
    StoreModule.forRoot({ modal: modalReducer, auth: authReducer }, {}),
    EffectsModule.forRoot([FormEffects, RegisterEffect, LoginEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
