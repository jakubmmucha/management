import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminSharedModule } from 'src/admin/shared.module';

import { LoginComponent } from 'src/app/main/pages/authentication/login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path     : 'auth/login',
        component: LoginComponent,
      data: {
          title: 'login'
      }
    }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AdminSharedModule
    ],
   exports: [RouterModule]
})
export class LoginModule {
}
