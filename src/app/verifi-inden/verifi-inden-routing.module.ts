import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifiIndenPage } from './verifi-inden.page';

const routes: Routes = [
  {
    path: '',
    component: VerifiIndenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifiIndenPageRoutingModule {}
