import { NgModule } from '@angular/core';

import { AdminIfOnDomDirective } from 'src/admin/directives/admin-if-on-dom/admin-if-on-dom.directive';
import { AdminInnerScrollDirective } from 'src/admin/directives/admin-inner-scroll/admin-inner-scroll.directive';
import { AdminPerfectScrollbarDirective } from 'src/admin/directives/admin-perfect-scrollbar/admin-perfect-scrollbar.directive';
// tslint:disable-next-line:max-line-length
import { AdminMatSidenavHelperDirective, AdminMatSidenavTogglerDirective } from 'src/admin/directives/admin-mat-sidenav/admin-mat-sidenav.directive';

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
