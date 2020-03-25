import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminSidebarModule } from 'src/admin/components';
import { AdminSharedModule } from 'src/admin/shared.module';

import { ContentModule } from 'src/app/layout-admin/components/content/content.module';
import { FooterModule } from 'src/app/layout-admin/components/footer/footer.module';
import { NavbarModule } from 'src/app/layout-admin/components/navbar/navbar.module';
import { QuickPanelModule } from 'src/app/layout-admin/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'src/app/layout-admin/components/toolbar/toolbar.module';

import { VerticalLayout1Component } from 'src/app/layout-admin/vertical/layout-1/layout-1.component';

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
