import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {AdminPipesModule} from './pipes/pipes.module';
import {AdminDirectivesModule} from './directives/directives';


@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,

        AdminDirectivesModule,
        AdminPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        AdminDirectivesModule,
        AdminPipesModule
    ]
})
export class AdminSharedModule {
}
