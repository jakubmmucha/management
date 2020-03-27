import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AdminSharedModule } from 'src/admin/shared.module';

import { SampleComponent } from './sample.component';
import {TranslateModule} from '@ngx-translate/core';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
         TranslateModule,
        AdminSharedModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
