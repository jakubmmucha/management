import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdminSearchBarModule, AdminShortcutsModule } from 'src/admin/components';
import { AdminSharedModule } from 'src/admin/shared.module';

import { ToolbarComponent } from 'src/app/layout/components/toolbar/toolbar.component';

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
