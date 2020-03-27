import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminNavigationModule } from 'src/admin/components';
import { AdminSharedModule } from 'src/admin/shared.module';

import { NavbarVerticalStyle2Component } from 'src/app/layout-admin/components/navbar/vertical/style-2/style-2.component';

@NgModule({
    declarations: [
        NavbarVerticalStyle2Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        AdminSharedModule,
        AdminNavigationModule
    ],
    exports     : [
        NavbarVerticalStyle2Component
    ]
})
export class NavbarVerticalStyle2Module {
}
