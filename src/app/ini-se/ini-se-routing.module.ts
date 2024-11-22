import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniSePage } from './ini-se.page';

const routes: Routes = [
  {
    path: '',
    component: IniSePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniSePageRoutingModule {}
