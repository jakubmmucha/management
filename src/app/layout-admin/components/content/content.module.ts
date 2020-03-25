import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminSharedModule } from 'src/admin/shared.module';

import { ContentComponent } from 'src/app/layout-admin/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        AdminSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
