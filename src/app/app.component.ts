import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { AdminConfigService } from 'src/admin/services/config.service';
import { DOCUMENT } from '@angular/common';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Platform} from '@angular/cdk/platform';




@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  fuseConfig: any;


  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _fuseConfigService: AdminConfigService,
    private _platform: Platform
  ) {
    // Get default navigation-admin

    // Register the navigation-admin to the service
    // Set the main navigation-admin as our current navigation-admin

    // Set the navigationtranslations

    // Add is-mobile class to the body if the platform is mobile
    if ( this._platform.ANDROID || this._platform.IOS ) {
      this.document.body.classList.add('is-mobile');
    }

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
    // Subscribe to config changes
    this._fuseConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this.fuseConfig = config;

        // Boxed
        if ( this.fuseConfig.layout.width === 'boxed' ) {
          this.document.body.classList.add('boxed');
        } else {
          this.document.body.classList.remove('boxed');
        }

        // Color theme - Use normal for loop for IE11 compatibility
        //
        for ( let i = 0; i < this.document.body.classList.length; i++ ) {
          const className = this.document.body.classList[i];

          if ( className.startsWith('theme-') ) {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.fuseConfig.colorTheme);
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

