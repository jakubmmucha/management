import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminNavigationModule } from '/../projects/admin/components';
import { AdminSharedModule } from '/../projects/admin/shared.module';

import { NavbarVerticalStyle1Component } from '/../projects/administration/src/app/layout-admin/components/navbar/vertical/style-1/style-1.component';

@NgModule({
    declarations: [
        NavbarVerticalStyle1Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        AdminSharedModule,
        AdminNavigationModule
    ],
    exports     : [
        NavbarVerticalStyle1Component
    ]
})
export class NavbarVerticalStyle1Module {
}
