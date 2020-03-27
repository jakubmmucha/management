import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AdminSharedModule } from 'src/admin/shared.module';

import { MailConfirmComponent } from 'src/app/authentification-pages/pages/mail-confirm/mail-confirm.component';

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
