import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminConfirmDialogComponent } from 'src/admin/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        AdminConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        AdminConfirmDialogComponent
    ],
})
export class AdminConfirmDialogModule
{
}
