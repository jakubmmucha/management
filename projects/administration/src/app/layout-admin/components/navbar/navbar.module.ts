import { NgModule } from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {AdminSharedModule} from '../../../../../../admin/shared.module';
import {NavbarHorizontalStyle1Module} from './horizontal/style-1/style-1.module';
import {NavbarVerticalStyle2Module} from './vertical/style-2/style-2.module';
import {NavbarVerticalStyle1Module} from './vertical/style-1/style-1.module';



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
