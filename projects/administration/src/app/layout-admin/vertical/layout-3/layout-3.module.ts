import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import {AdminSidebarModule} from '../../../../../../admin/components';
import {VerticalLayout3Component} from './layout-3.component';
import {AdminSharedModule} from '../../../../../../admin/shared.module';
import {ContentModule} from '../../components/content/content.module';
import {FooterModule} from '../../components/footer/footer.module';
import {NavbarModule} from '../../components/navbar/navbar.module';
import {QuickPanelModule} from '../../components/quick-panel/quick-panel.module';
import {ToolbarModule} from '../../components/toolbar/toolbar.module';



@NgModule({
    declarations: [
        VerticalLayout3Component
    ],
    imports     : [
        RouterModule,

        AdminSharedModule,
        AdminSidebarModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        VerticalLayout3Component
    ]
})
export class VerticalLayout3Module
{
}
