import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamContPage } from './cam-cont.page';

const routes: Routes = [
  {
    path: '',
    component: CamContPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamContPageRoutingModule {}
