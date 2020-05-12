import { NgModule } from '@angular/core';

import { AdminCountdownComponent } from '/../projects/admin/components/countdown/countdown.component';

@NgModule({
    declarations: [
        AdminCountdownComponent
    ],
    exports: [
        AdminCountdownComponent
    ],
})
export class AdminCountdownModule {
}
