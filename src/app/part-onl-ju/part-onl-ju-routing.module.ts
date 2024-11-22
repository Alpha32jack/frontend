import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartOnlJuPage } from './part-onl-ju.page';

const routes: Routes = [
  {
    path: '',
    component: PartOnlJuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartOnlJuPageRoutingModule {}
