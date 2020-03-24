import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from './shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MemberModule} from './member/member.module';
import {LayoutModule } from 'src/app/layout/layout.module';
import {LoginModule} from './main/pages/authentication/login/login.module';
import {RegisterModule} from './main/pages/authentication/register/register.module';

import { fuseConfig } from 'src/app/admin-config';


import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import { AdminModule } from 'src/admin/admin.module';

import { AdminSharedModule } from 'src/admin/shared.module';
import 'hammerjs';

import { AdminProgressBarModule, AdminSidebarModule, AdminThemeOptionsModule } from 'src/admin/components';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LayoutModule,
    MemberModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    ScrollToModule,
    SharedModule,
    AdminSharedModule,
    AdminModule,
    LoginModule,
    RegisterModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      // Material moment date module
      MatMomentDateModule,

      // Material
      MatButtonModule,
      MatIconModule,

      // Admin modules
      AdminModule.forRoot(fuseConfig),
      AdminProgressBarModule,
      AdminSharedModule,
      AdminSidebarModule,
      AdminThemeOptionsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
