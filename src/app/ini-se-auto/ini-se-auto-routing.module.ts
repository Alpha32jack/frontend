import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniSeAutoPage } from './ini-se-auto.page';

const routes: Routes = [
  {
    path: '',
    component: IniSeAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniSeAutoPageRoutingModule {}
