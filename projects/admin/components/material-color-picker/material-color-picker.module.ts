import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminPipesModule } from '/../projects/admin/pipes/pipes.module';
import { AdminMaterialColorPickerComponent } from '/../projects/admin/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        AdminMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        AdminPipesModule
    ],
    exports: [
        AdminMaterialColorPickerComponent
    ],
})
export class AdminMaterialColorPickerModule {
}
