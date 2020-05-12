import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdminSearchBarModule, AdminShortcutsModule } from '/../projects/admin/components';
import { AdminSharedModule } from '/../projects/admin/shared.module';

import { ToolbarComponent } from '/../projects/administration/src/app/layout-admin/components/toolbar/toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        AdminSharedModule,
        AdminSearchBarModule,
        AdminShortcutsModule
    ],
    exports     : [
        ToolbarComponent
    ]
})
export class ToolbarModule {
}
