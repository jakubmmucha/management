import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { AdminConfigService } from 'src/admin/services/config.service';
import { DOCUMENT } from '@angular/common';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Platform} from '@angular/cdk/platform';
import { AdminNavigationService } from 'src/admin/components/navigation/navigation.service';
import { AdminSidebarService } from 'src/admin/components/sidebar/sidebar.service';
import { AdminSplashScreenService } from 'src/admin/services/splash-screen.service';
import { AdminTranslationLoaderService } from 'src/admin/services/translation-loader.service';
import { navigation } from './navigation-admin/navigation';



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  fuseConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _fuseConfigService: AdminConfigService,
    private _fuseNavigationService: AdminNavigationService,
    private _fuseSidebarService: AdminSidebarService,
    private _platform: Platform
  ) {
    // Get default navigation
    this.navigation = navigation;

    // Register the navigation to the service
    this._fuseNavigationService.register('main', this.navigation);

    // Set the main navigation as our current navigation
    this._fuseNavigationService.setCurrentNavigation('main');

    // Add languages

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
  toggleSidebarOpen(key): void {
    this._fuseSidebarService.getSidebar(key).toggleOpen();
  }

}




