import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AdminSharedModule } from '/../projects/admin/shared.module';

import { ContentModule } from '/../projects/administration/src/app/layout-admin/components/content/content.module';
import { FooterModule } from '/../projects/administration/src/app/layout-admin/components/footer/footer.module';
import { NavbarModule } from '/../projects/administration/src/app/layout-admin/components/navbar/navbar.module';
import { QuickPanelModule } from '/../projects/administration/src/app/layout-admin/components/quick-panel/quick-panel.module';
import { ToolbarModule } from '/../projects/administration/src/app/layout-admin/components/toolbar/toolbar.module';

import { VerticalLayout1Component } from '/../projects/administration/src/app/layout-admin/vertical/layout-1/layout-1.component';
import {AdminSidebarModule} from '../../../../../../admin/components';

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
