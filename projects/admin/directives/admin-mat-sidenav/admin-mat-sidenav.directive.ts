import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AdminMatchMediaService } from '/../projects/admin/services/match-media.service';
import { AdminMatSidenavHelperService } from '/../projects/admin/directives/admin-mat-sidenav/admin-mat-sidenav.service';

@Directive({
    selector: '[fuseMatSidenavHelper]'
})
export class AdminMatSidenavHelperDirective implements OnInit, OnDestroy {
    @HostBinding('class.mat-is-locked-open')
    isLockedOpen: boolean;

    @Input()
    fuseMatSidenavHelper: string;

    @Input()
    matIsLockedOpen: string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AdminMatchMediaService} _fuseMatchMediaService
     * @param {AdminMatSidenavHelperService} _fuseMatSidenavHelperService
     * @param {MatSidenav} _matSidenav
     * @param {MediaObserver} _mediaObserver
     */
    constructor(
        private _fuseMatchMediaService: AdminMatchMediaService,
        private _fuseMatSidenavHelperService: AdminMatSidenavHelperService,
        private _matSidenav: MatSidenav,
        private _mediaObserver: MediaObserver
    ) {
        // Set the defaults
        this.isLockedOpen = true;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Register the sidenav to the service
        this._fuseMatSidenavHelperService.setSidenav(this.fuseMatSidenavHelper, this._matSidenav);

        if ( this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen) ) {
            this.isLockedOpen = true;
            this._matSidenav.mode = 'side';
            this._matSidenav.toggle(true);
        } else {
            this.isLockedOpen = false;
            this._matSidenav.mode = 'over';
            this._matSidenav.toggle(false);
        }

        this._fuseMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if ( this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen) ) {
                    this.isLockedOpen = true;
                    this._matSidenav.mode = 'side';
                    this._matSidenav.toggle(true);
                } else {
                    this.isLockedOpen = false;
                    this._matSidenav.mode = 'over';
                    this._matSidenav.toggle(false);
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

@Directive({
    selector: '[fuseMatSidenavToggler]'
})
export class AdminMatSidenavTogglerDirective {
    @Input()
    fuseMatSidenavToggler: string;

    /**
     * Constructor
     *
     * @param {AdminMatSidenavHelperService} _fuseMatSidenavHelperService
     */
    constructor(
        private _fuseMatSidenavHelperService: AdminMatSidenavHelperService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On click
     */
    @HostListener('click')
    onClick(): void {
        this._fuseMatSidenavHelperService.getSidenav(this.fuseMatSidenavToggler).toggle();
    }
}
