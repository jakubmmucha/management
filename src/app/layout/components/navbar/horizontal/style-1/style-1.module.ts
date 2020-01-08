import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminNavigationModule } from 'src/admin/components';
import { AdminSharedModule } from 'src/admin/shared.module';

import { NavbarHorizontalStyle1Component } from 'src/app/layout/components/navbar/horizontal/style-1/style-1.component';

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
