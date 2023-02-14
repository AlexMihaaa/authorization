import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { LoginComponent } from './components/modal-windows/login/login.component'
import { ModalService } from './services/modal.service'
import { modalReducer } from './store/modal.reducer'
import { FormEffects } from './store/modal.effects'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    LoginComponent,
    StoreModule.forRoot({ modalReducer }, {}),
    EffectsModule.forRoot([FormEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
