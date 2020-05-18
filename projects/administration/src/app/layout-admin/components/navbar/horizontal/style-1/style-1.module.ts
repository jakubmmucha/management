import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {NavbarHorizontalStyle1Component} from './style-1.component';
import {AdminSharedModule} from '../../../../../../../../admin/shared.module';
import {AdminNavigationModule} from '../../../../../../../../admin/components';




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
