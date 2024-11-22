import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajeHaPage } from './personaje-ha.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajeHaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajeHaPageRoutingModule {}
