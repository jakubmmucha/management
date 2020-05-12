import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminViewsModule} from './admin_views.module';

import {SampleComponent} from './dashboard/sample.component';
import {LoginComponent} from './authentification/pages/login/login.component';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LoginComponent
  },
  {
    path: 'sample', component: SampleComponent
  }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
  })

export class AdminViewsModuleRouting {}
