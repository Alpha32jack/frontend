import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisPersonPage } from './regis-person.page';

const routes: Routes = [
  {
    path: '',
    component: RegisPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisPersonPageRoutingModule {}
