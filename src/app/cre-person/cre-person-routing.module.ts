import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrePersonPage } from './cre-person.page';

const routes: Routes = [
  {
    path: '',
    component: CrePersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrePersonPageRoutingModule {}
