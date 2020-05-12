import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { AdminSharedModule } from '/../projects/admin/shared.module';
import {FormsComponent} from './forms.component';



const routes: Routes = [
    {
        path     : 'forms',
        component: FormsComponent
    }
];

@NgModule({
    declarations: [
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,

      AdminSharedModule,
    ]
})
export class UIFormsModule
{
}
