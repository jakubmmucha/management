import { NgModule } from '@angular/core';

import { AdminCountdownComponent } from 'src/admin/components/countdown/countdown.component';

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
