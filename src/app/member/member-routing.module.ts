import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymComponent } from './gym/gym.component';


const routes: Routes = [

  {
    path: 'gym',
    component: GymComponent,
    data: {
      title: 'Gym'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
