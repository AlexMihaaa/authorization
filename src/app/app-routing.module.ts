import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MainPageComponent } from './shared/components/main-page/main-page.component'
import { HomePageComponent } from './module/home-page/components/home-page/home-page.component'
import { AuthGuard } from './module/auth/guards/auth.guard'

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomePageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
