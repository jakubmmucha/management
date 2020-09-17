import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SampleComponent} from './admin_views/dashboard/sample.component';
import {LoginComponent} from './admin_views/authentification/pages/login/login.component';
import {RegisterComponent} from './admin_views/authentification/pages/register/register.component';
import {AdminViewsModuleRouting} from './admin_views/admin_views-routing.module';


export const routes: Routes = [
  {path: 'sample', component: SampleComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AdminViewsModuleRouting
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
