import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {VerticalLayout1Component} from './layout-1.component';
import {AdminSharedModule} from '../../../../../../admin/shared.module';
import {AdminSidebarModule} from '../../../../../../admin/components';
import {ContentModule} from '../../components/content/content.module';
import {FooterModule} from '../../components/footer/footer.module';
import {NavbarModule} from '../../components/navbar/navbar.module';
import {QuickPanelModule} from '../../components/quick-panel/quick-panel.module';
import {ToolbarModule} from '../../components/toolbar/toolbar.module';





@NgModule({
    declarations: [
        VerticalLayout1Component
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
        VerticalLayout1Component
    ]
})
export class VerticalLayout1Module {
}
