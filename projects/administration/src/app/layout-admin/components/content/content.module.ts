import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminSharedModule } from '/../projects/admin/shared.module';

import { ContentComponent } from '/../projects/administration/src/app/layout-admin/components/content/content.component';

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
