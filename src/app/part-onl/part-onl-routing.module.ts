import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartOnlPage } from './part-onl.page';

const routes: Routes = [
  {
    path: '',
    component: PartOnlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartOnlPageRoutingModule {}
