import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {ToolbarComponent} from './toolbar.component';
import {AdminSharedModule} from '../../../../../../admin/shared.module';
import {AdminSearchBarModule, AdminShortcutsModule} from '../../../../../../admin/components';




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
