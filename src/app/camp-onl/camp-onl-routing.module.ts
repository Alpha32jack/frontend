import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampOnlPage } from './camp-onl.page';

const routes: Routes = [
  {
    path: '',
    component: CampOnlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampOnlPageRoutingModule {}
