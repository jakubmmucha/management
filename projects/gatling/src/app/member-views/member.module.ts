
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedMemberModule } from '../shared-member/shared-member.module';
import { CountToModule } from 'angular-count-to';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { AngularTiltModule } from 'angular-tilt';
import 'mousetrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { NgxPayPalModule } from 'ngx-paypal';
import { Ng5SliderModule } from 'ng5-slider';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// Gym Layout
import { GymComponent } from './gym-home_page/gym-home.component';

import { GymNavComponent } from './gym-home_page/gym-nav/gym-nav.component';

import { GymHeaderComponent } from './gym-home_page/gym-header/gym-header.component';

import { GymAboutComponent } from './gym-home_page/gym-about/gym-about.component';

import { GymScheduleComponent } from './gym-home_page/gym-schedule/gym-schedule.component';

import { GymWorkoutAboutComponent } from './gym-home_page/gym-workout-about/gym-workout-about.component';


import { GymCounterComponent } from './gym-home_page/gym-counter/gym-counter.component';
import { GymTrainerComponent } from './gym-home_page/gym-trainer/gym-trainer.component';
import { GymTestimonialComponent } from './gym-home_page/gym-testimonial/gym-testimonial.component';
import { GymPricingComponent } from './gym-home_page/gym-pricing/gym-pricing.component';
import { GymBMIComponent } from './gym-home_page/gym-bmi/gym-bmi.component';
import { GymBrandComponent } from './gym-home_page/gym-brand/gym-brand.component';
import { GymFooterComponent } from './gym-home_page/gym-footer/gym-footer.component';
import { GymCopyrightComponent } from './gym-home_page/gym-copyright/gym-copyright.component';
import {NgxMasonryModule} from 'ngx-masonry';
import {EcommerceHeaderComponent} from './gym-home_page/landing-header/ecommerce-header.component';
import { GymInsideGymPageComponent } from './gym-inside-gym-page/gym-inside-gym-page.component';
import { GymMembershipPageComponent } from './gym-membership-page/gym-membership-page.component';
import { GymOpeningTimesPageComponent } from './gym-opening-times-page/gym-opening-times-page.component';
import { GymBlogPageComponent } from './gym-blog-page/gym-blog-page.component';
import { GymShopPageComponent } from './gym-shop-page/gym-shop-page.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AccountViewComponent} from './account-page/account-view.component';
import {BreadcrumbBigTypographyComponent} from './account-page/breadcrumb-big-typography/breadcrumb-big-typography.component';
import {PersonalInformationComponent} from './account-page/personal-information/personal-information.component';


// E-commerce Layout


import {NgModule} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {MaterialModule} from '../angular-material-elements/material.module';
import {TryComponent } from './try/try.component';
import {CheckoutComponent} from './account-page/checkout/checkout.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {UIFormsModule} from '../forms/forms.module';
import {AdminLayoutModule} from '../../../../administration/src/app/layout-admin/admin-layout.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProfileDetailsComponent} from './account-page/profile-details/profile-details.component';
import {FormsComponent} from '../forms/forms.component';
import { TabsComponent } from './tabs/tabs.component';





const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({

  declarations: [GymComponent, ProfileDetailsComponent, FormsComponent, LoginComponent, PersonalInformationComponent, CheckoutComponent, BreadcrumbBigTypographyComponent, SignUpComponent, AccountViewComponent, GymNavComponent, GymHeaderComponent, GymAboutComponent, GymScheduleComponent,
    GymWorkoutAboutComponent, GymCounterComponent, GymTrainerComponent, GymTestimonialComponent, GymPricingComponent,
    GymBMIComponent, GymBrandComponent, GymFooterComponent, GymCopyrightComponent, EcommerceHeaderComponent, GymInsideGymPageComponent, GymInsideGymPageComponent, GymMembershipPageComponent, GymOpeningTimesPageComponent, GymBlogPageComponent, GymShopPageComponent, TryComponent, TabsComponent],

  imports: [
    CommonModule,
    TabsModule,
    MaterialModule,
    MemberRoutingModule,
    FormsModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule.forRoot(),
    SharedMemberModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    MasonryGalleryModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    Ng5SliderModule,
    NgxMasonryModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminLayoutModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class MemberModule { }
