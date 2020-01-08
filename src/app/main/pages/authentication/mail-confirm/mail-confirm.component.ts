import { Component, ViewEncapsulation } from '@angular/core';

import { AdminConfigService } from 'src/admin/services/config.service';
import { fuseAnimations } from 'src/admin/animations';

@Component({
    selector     : 'mail-confirm',
    templateUrl  : './mail-confirm.component.html',
    styleUrls    : ['./mail-confirm.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class MailConfirmComponent {
    /**
     * Constructor
     *
     * @param {AdminConfigService} _fuseConfigService
     */
    constructor(
        private _fuseConfigService: AdminConfigService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
}
