import { NgModule } from '@angular/core';
import {AdminIfOnDomDirective} from './admin-if-on-dom/admin-if-on-dom.directive';
import {AdminInnerScrollDirective} from './admin-inner-scroll/admin-inner-scroll.directive';
import {AdminMatSidenavHelperDirective, AdminMatSidenavTogglerDirective} from './admin-mat-sidenav/admin-mat-sidenav.directive';
import {AdminPerfectScrollbarDirective} from './admin-perfect-scrollbar/admin-perfect-scrollbar.directive';




@NgModule({
    declarations: [
        AdminIfOnDomDirective,
        AdminInnerScrollDirective,
        AdminMatSidenavHelperDirective,
        AdminMatSidenavTogglerDirective,
        AdminPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        AdminIfOnDomDirective,
        AdminInnerScrollDirective,
        AdminMatSidenavHelperDirective,
        AdminMatSidenavTogglerDirective,
        AdminPerfectScrollbarDirective
    ]
})
export class AdminDirectivesModule {
}
