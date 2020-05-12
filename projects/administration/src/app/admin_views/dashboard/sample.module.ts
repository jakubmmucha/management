import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SampleComponent } from './sample.component';
import {TranslateModule} from '@ngx-translate/core';
import {AdminSharedModule} from '../../../../../admin/shared.module';



@NgModule({
    declarations: [
    ],
    imports     : [
         TranslateModule,
        AdminSharedModule
    ],
    exports     : [
    ]
})

export class SampleModule {
}
