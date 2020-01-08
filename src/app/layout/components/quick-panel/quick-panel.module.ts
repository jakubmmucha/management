import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AdminSharedModule } from 'src/admin/shared.module';

import { QuickPanelComponent } from 'src/app/layout/components/quick-panel/quick-panel.component';

@NgModule({
    declarations: [
        QuickPanelComponent
    ],
    imports     : [
        MatDividerModule,
        MatListModule,
        MatSlideToggleModule,

        AdminSharedModule,
    ],
    exports: [
        QuickPanelComponent
    ]
})
export class QuickPanelModule
{
}
