import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCampPage } from './crear-camp.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCampPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCampPageRoutingModule {}
