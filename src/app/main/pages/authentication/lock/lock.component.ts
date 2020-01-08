import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminConfigService } from 'src/admin/services/config.service';
import { fuseAnimations } from 'src/admin/animations';

@Component({
    selector     : 'lock',
    templateUrl  : './lock.component.html',
    styleUrls    : ['./lock.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LockComponent implements OnInit {
    lockForm: FormGroup;

    /**
     * Constructor
     *
     * @param {AdminConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: AdminConfigService,
        private _formBuilder: FormBuilder
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

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.lockForm = this._formBuilder.group({
            username: [
                {
                    value   : 'Katherine',
                    disabled: true
                }, Validators.required
            ],
            password: ['', Validators.required]
        });
    }
}
