import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {AdminDemoContentComponent} from './demo-content/demo-content.component';
import {AdminDemoSidebarComponent} from './demo-sidebar/demo-sidebar.component';



@NgModule({
    declarations: [
        AdminDemoContentComponent,
        AdminDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        AdminDemoContentComponent,
        AdminDemoSidebarComponent
    ]
})
export class AdminDemoModule {
}
