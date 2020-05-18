import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {NavbarVerticalStyle1Component} from './style-1.component';
import {AdminSharedModule} from '../../../../../../../../admin/shared.module';
import {AdminNavigationModule} from '../../../../../../../../admin/components';



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
