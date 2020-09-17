import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ContentComponent} from './content.component';
import {AdminSharedModule} from '../../../../../../admin/shared.module';



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
