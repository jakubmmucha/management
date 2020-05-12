import {NgModule} from '@angular/core';
import {authInterceptorProviders} from '../_helpers/auth.interceptor';
import {LoginComponent} from './authentification/pages/login/login.component';
import {RegisterComponent} from './authentification/pages/register/register.component';
import {SampleComponent} from './dashboard/sample.component';
import {LoginModule} from './authentification/pages/login/login.module';
import {SampleModule} from './dashboard/sample.module';
import {RegisterModule} from './authentification/pages/register/register.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule, MatIconModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    RegisterComponent,
    SampleComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    SampleModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  exports: [
    LoginModule,
    RegisterModule,
    SampleModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [authInterceptorProviders],
})

  export class AdminViewsModule {
  }
