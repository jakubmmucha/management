import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {LoginComponent} from './login.component';
import {AdminSharedModule} from '../../../../../../../admin/shared.module';


const routes: Routes = [
  {
    path     : 'auth/login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports : [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        AdminSharedModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
   exports: [RouterModule]
})
export class LoginModule {
}
