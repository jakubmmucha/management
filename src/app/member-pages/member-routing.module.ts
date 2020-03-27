import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymComponent } from './gym-home_page/gym-home.component';
import {GymInsideGymPageComponent} from './gym-inside-gym-page/gym-inside-gym-page.component';
import {GymBlogPageComponent} from './gym-blog-page/gym-blog-page.component';
import {GymMembershipPageComponent} from './gym-membership-page/gym-membership-page.component';
import {GymShopPageComponent} from './gym-shop-page/gym-shop-page.component';
import {GymOpeningTimesPageComponent} from './gym-opening-times-page/gym-opening-times-page.component';


const routes: Routes = [

  {
    path: 'gym',
    component: GymComponent,
    data: {
      title: 'Gym'
    }
  },
  {
    path: 'inside',
    component: GymInsideGymPageComponent,
    data: {
      title: 'Inside'
    }
  },
  {
    path: 'blog',
    component: GymBlogPageComponent,
    data: {
      title: 'Blog'
    }
  },
  {
    path: 'membership',
    component: GymMembershipPageComponent,
    data: {
      title: 'Membership'
    }
  },
  {
    path: 'shop',
    component: GymShopPageComponent,
    data: {
      title: 'Shop'
    }
  },
  {
    path: 'times',
    component: GymOpeningTimesPageComponent,
    data: {
      title: 'Opening Times'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
