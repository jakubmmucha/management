import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminNavigationModule } from '/../projects/admin/components';
import { AdminSharedModule } from '/../projects/admin/shared.module';

// tslint:disable-next-line:max-line-length
import { NavbarHorizontalStyle1Component } from '/../projects/administration/src/app/layout-admin/components/navbar/horizontal/style-1/style-1.component';

@NgModule({
    declarations: [
        NavbarHorizontalStyle1Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        AdminSharedModule,
        AdminNavigationModule
    ],
    exports     : [
        NavbarHorizontalStyle1Component
    ]
})
export class NavbarHorizontalStyle1Module {
}
