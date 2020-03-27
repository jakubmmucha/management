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
import { SharedModule } from './shared-member/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MemberModule} from './member-pages/member.module';
import {LayoutModule } from 'src/app/layout-admin/layout.module';
import {LoginModule} from './authentification-pages/pages/login/login.module';
import {RegisterModule} from './authentification-pages/pages/register/register.module';

import { adminConfig } from 'src/app/admin-config';


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
import {SampleModule} from './main/sample/sample.module';



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
    SampleModule,
    RegisterModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    TranslateModule.forRoot(),
      // Material moment date module
      MatMomentDateModule,

      // Material
      MatButtonModule,
      MatIconModule,

      // Admin modules
      AdminModule.forRoot(adminConfig),
      AdminProgressBarModule,
      AdminSharedModule,
      AdminSidebarModule,
      AdminThemeOptionsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
