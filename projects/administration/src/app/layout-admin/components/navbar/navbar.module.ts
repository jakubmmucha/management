import { NgModule } from '@angular/core';

import { AdminSharedModule } from '/../projects/admin/shared.module';

import { NavbarComponent } from '/../projects/administration/src/app/layout-admin/components/navbar/navbar.component';
import { NavbarHorizontalStyle1Module } from '/../projects/administration/src/app/layout-admin/components/navbar/horizontal/style-1/style-1.module';
import { NavbarVerticalStyle1Module } from '/../projects/administration/src/app/layout-admin/components/navbar/vertical/style-1/style-1.module';
import { NavbarVerticalStyle2Module } from '/../projects/administration/src/app/layout-admin/components/navbar/vertical/style-2/style-2.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        AdminSharedModule,

        NavbarHorizontalStyle1Module,
        NavbarVerticalStyle1Module,
        NavbarVerticalStyle2Module
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule {
}
