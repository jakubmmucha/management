import { NgModule } from '@angular/core';
import {AdminSidebarComponent} from './sidebar.component';



@NgModule({
    declarations: [
        AdminSidebarComponent
    ],
    exports     : [
        AdminSidebarComponent
    ]
})
export class AdminSidebarModule {
}
