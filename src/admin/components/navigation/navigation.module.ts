import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { AdminNavigationComponent } from './navigation.component';
import { AdminNavVerticalItemComponent } from './vertical/item/item.component';
import { AdminNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { AdminNavVerticalGroupComponent } from './vertical/group/group.component';
import { AdminNavHorizontalItemComponent } from './horizontal/item/item.component';
import { AdminNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        AdminNavigationComponent
    ],
    declarations: [
        AdminNavigationComponent,
        AdminNavVerticalGroupComponent,
        AdminNavVerticalItemComponent,
        AdminNavVerticalCollapsableComponent,
        AdminNavHorizontalItemComponent,
        AdminNavHorizontalCollapsableComponent
    ]
})
export class AdminNavigationModule {
}
