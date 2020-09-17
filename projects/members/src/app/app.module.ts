import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedMemberModule} from './shared-member/shared-member.module';
import {MemberModule} from './member-views/member.module';
import {LandingComponent} from './landing/landing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from 'ng2-scroll-to-el';
import { routes } from './app-routing.module';

import {RouterModule} from '@angular/router';
import {authInterceptorProviders} from './_helpers-members/auth-members.interceptor';




const providers = [];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MemberModule,
    SharedMemberModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    ScrollToModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
  ],
  providers: [providers, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }


