import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminSidebarModule, AdminThemeOptionsModule } from '/../projects/admin/components';
import { AdminSharedModule } from '/../projects/admin/shared.module';
import {HorizontalLayout1Component} from './layout-1.component';
import {ContentModule} from '../../components/content/content.module';
import {FooterModule} from '../../components/footer/footer.module';
import {NavbarModule} from '../../components/navbar/navbar.module';
import {QuickPanelModule} from '../../components/quick-panel/quick-panel.module';
import {ToolbarModule} from '../../components/toolbar/toolbar.module';



@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports     : [
        MatSidenavModule,

        AdminSharedModule,
        AdminSidebarModule,
        AdminThemeOptionsModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module {
}
