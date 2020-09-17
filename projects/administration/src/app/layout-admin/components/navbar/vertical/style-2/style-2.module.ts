import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {NavbarVerticalStyle2Component} from './style-2.component';
import {AdminSharedModule} from '../../../../../../../../admin/shared.module';
import {AdminNavigationModule} from '../../../../../../../../admin/components';



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
