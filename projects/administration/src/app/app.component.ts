import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { AdminConfigService } from '/../projects/admin/services/config.service';
import { DOCUMENT } from '@angular/common';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Platform} from '@angular/cdk/platform';
import { AdminNavigationService } from '/../projects/admin/components/navigation/navigation.service';
import { AdminSidebarService } from '/../projects/admin/components/sidebar/sidebar.service';
import { navigation } from './navigation-admin/navigation';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  adminConfig: any;
  adminNavigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private adminConfigService: AdminConfigService,
    private adminNavigationService: AdminNavigationService,
    private adminSidebarService: AdminSidebarService,
    private platform: Platform
  ) {
    // Get default navigation
    this.adminNavigation = navigation;

    // Register the navigation to the service
    this.adminNavigationService.register('main', this.adminNavigation);

    // Set the main navigation as our current navigation
    this.adminNavigationService.setCurrentNavigation('main');

    // Add languages

    // Add is-mobile class to the body if the platform is mobile
    if ( this.platform.ANDROID || this.platform.IOS ) {
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
    this.adminConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this.adminConfig = config;

        // Boxed
        if ( this.adminConfig.layout.width === 'boxed' ) {
          this.document.body.classList.add('boxed');
        } else {
          this.document.body.classList.remove('boxed');
        }

        // Color theme - Use normal for loop for IE11 compatibility
        //
        for ( let i = 0; i < this.document.body.classList.length; i++ ) {
          const classNamesList = this.document.body.classList[i];

          if ( classNamesList.startsWith('theme-') ) {
            this.document.body.classList.remove(classNamesList);
          }
        }

        this.document.body.classList.add(this.adminConfig.colorTheme);
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
  toggleSidebarOpen(key): void {
    this.adminSidebarService.getSidebar(key).toggleOpen();
  }

}




