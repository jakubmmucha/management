import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountViewComponent} from './member-views/account-page/account-view.component';
import {GymComponent} from './member-views/gym-home_page/gym-home.component';
import {GymInsideGymPageComponent} from './member-views/gym-inside-gym-page/gym-inside-gym-page.component';
import {LandingComponent} from './landing/landing.component';



export const routes: Routes = [
  {path: 'account', component: AccountViewComponent },
  {path: '', redirectTo: '/gym' , pathMatch: 'full' },
  {path: 'gym', component: GymComponent },
  {path: 'inside', component: GymInsideGymPageComponent},
  {path: 'landing', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
