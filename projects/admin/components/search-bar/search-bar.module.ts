import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        AdminSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        AdminSearchBarComponent
    ]
})
export class AdminSearchBarModule {
}
