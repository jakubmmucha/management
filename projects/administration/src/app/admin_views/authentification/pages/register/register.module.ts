import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


import { RegisterComponent } from '/../projects/administration/src/app/admin_views/authentification/pages/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminSharedModule} from '../../../../../../../admin/shared.module';


@NgModule({
    declarations: [
    ],
    imports     : [
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AdminSharedModule
    ],
  exports: [RouterModule]
})
export class RegisterModule {
}
