import { NgModule } from '@angular/core';
import {AdminWidgetComponent} from './widget.component';
import {AdminWidgetToggleDirective} from './widget-toggle.directive';



@NgModule({
    declarations: [
        AdminWidgetComponent,
        AdminWidgetToggleDirective
    ],
    exports     : [
        AdminWidgetComponent,
        AdminWidgetToggleDirective
    ],
})
export class AdminWidgetModule {
}
