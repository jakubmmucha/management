import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {AdminDirectivesModule} from './directives/directives';
import {AdminPipesModule} from './pipes/pipes.module';



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
