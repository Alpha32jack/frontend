import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeriConfirmPage } from './veri-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: VeriConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeriConfirmPageRoutingModule {}
