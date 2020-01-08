import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminSidebarModule } from 'src/admin/components/index';
import { AdminSharedModule } from 'src/admin/shared.module';

import { ContentModule } from 'src/app/layout/components/content/content.module';
import { FooterModule } from 'src/app/layout/components/footer/footer.module';
import { NavbarModule } from 'src/app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'src/app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'src/app/layout/components/toolbar/toolbar.module';

import { VerticalLayout3Component } from 'src/app/layout/vertical/layout-3/layout-3.component';

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
