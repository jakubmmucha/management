import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import {GymComponent} from './member-pages/gym-home_page/gym-home.component';
import {LoginComponent} from './authentification-pages/pages/login/login.component';
import {RegisterComponent} from './authentification-pages/pages/register/register.component';
import {GymInsideGymPageComponent} from './member-pages/gym-inside-gym-page/gym-inside-gym-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'gym',
    pathMatch: 'full',
  },
  {
    path: 'gym',
    component: GymComponent
  },
  {
    path: 'inside',
    component: GymInsideGymPageComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
