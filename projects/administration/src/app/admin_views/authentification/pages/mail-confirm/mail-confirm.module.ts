import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AdminSharedModule } from '/../projects/admin/shared.module';

import { MailConfirmComponent } from '/../projects/administration/src/app/admin_views/authentification/pages/mail-confirm/mail-confirm.component';

const routes = [
    {
        path     : 'auth/mail-confirm',
        component: MailConfirmComponent
    }
];

@NgModule({
    declarations: [
        MailConfirmComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        AdminSharedModule
    ]
})
export class MailConfirmModule {
}
