import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajeInvePage } from './personaje-inve.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajeInvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajeInvePageRoutingModule {}
