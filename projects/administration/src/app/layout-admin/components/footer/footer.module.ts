import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



import { FooterComponent } from '/../projects/administration/src/app/layout-admin/components/footer/footer.component';
import {AdminSharedModule} from '../../../../../../admin/shared.module';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        AdminSharedModule
    ],
    exports     : [
        FooterComponent
    ]
})
export class FooterModule {
}
