import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AdminSharedModule} from '../../../admin/shared.module';
import {AdminModule} from '../../../admin/admin.module';
import {AdminLayoutModule} from './layout-admin/admin-layout.module';
import {adminConfig} from './admin-config';
import {AdminProgressBarModule, AdminSidebarModule, AdminThemeOptionsModule} from '../../../admin/components';

import {AdminViewsModule} from './admin_views/admin_views.module';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    // Material moment date module
    MatMomentDateModule,
    RouterModule.forRoot(routes, {useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'}),

    // Material
    MatButtonModule,
    MatIconModule,

    // Admin modules
    AdminLayoutModule,
    AdminSharedModule,
    AdminModule,
    AdminViewsModule,
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
