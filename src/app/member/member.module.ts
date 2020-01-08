import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { CountToModule } from 'angular-count-to';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { AngularTiltModule } from 'angular-tilt';
import 'hammerjs';
import 'mousetrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { Ng5SliderModule } from 'ng5-slider';

// Gym Layout
import { GymComponent } from './gym/gym.component';
import { GymNavComponent } from './gym/gym-nav/gym-nav.component';
import { GymHeaderComponent } from './gym/gym-header/gym-header.component';
import { GymAboutComponent } from './gym/gym-about/gym-about.component';
import { GymScheduleComponent } from './gym/gym-schedule/gym-schedule.component';
import { GymWorkoutAboutComponent } from './gym/gym-workout-about/gym-workout-about.component';
import { GymCounterComponent } from './gym/gym-counter/gym-counter.component';
import { GymTrainerComponent } from './gym/gym-trainer/gym-trainer.component';
import { GymTestimonialComponent } from './gym/gym-testimonial/gym-testimonial.component';
import { GymPricingComponent } from './gym/gym-pricing/gym-pricing.component';
import { GymBMIComponent } from './gym/gym-bmi/gym-bmi.component';
import { GymBrandComponent } from './gym/gym-brand/gym-brand.component';
import { GymFooterComponent } from './gym/gym-footer/gym-footer.component';
import { GymCopyrightComponent } from './gym/gym-copyright/gym-copyright.component';
import {NgxMasonryModule} from 'ngx-masonry';
import {EcommerceHeaderComponent} from './gym/ecommerce-header/ecommerce-header.component';


// E-commerce Layout


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({

  declarations: [GymComponent, GymNavComponent, GymHeaderComponent, GymAboutComponent, GymScheduleComponent,
    GymWorkoutAboutComponent, GymCounterComponent, GymTrainerComponent, GymTestimonialComponent, GymPricingComponent,
    GymBMIComponent, GymBrandComponent, GymFooterComponent, GymCopyrightComponent, EcommerceHeaderComponent],

  imports: [
    CommonModule,
    MemberRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule.forRoot(),
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    MasonryGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    Ng5SliderModule,
    NgxMasonryModule
  ],

  exports: [
],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class MemberModule { }
