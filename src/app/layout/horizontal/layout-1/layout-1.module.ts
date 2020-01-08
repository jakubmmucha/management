import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminSidebarModule, AdminThemeOptionsModule } from 'src/admin/components';
import { AdminSharedModule } from 'src/admin/shared.module';

import { ContentModule } from 'src/app/layout/components/content/content.module';
import { FooterModule } from 'src/app/layout/components/footer/footer.module';
import { NavbarModule } from 'src/app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'src/app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'src/app/layout/components/toolbar/toolbar.module';

import { HorizontalLayout1Component } from 'src/app/layout/horizontal/layout-1/layout-1.component';

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
