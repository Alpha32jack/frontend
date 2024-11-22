import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampConfigPage } from './camp-config.page';

const routes: Routes = [
  {
    path: '',
    component: CampConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampConfigPageRoutingModule {}
