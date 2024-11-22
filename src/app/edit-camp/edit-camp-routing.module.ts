import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCampPage } from './edit-camp.page';

const routes: Routes = [
  {
    path: '',
    component: EditCampPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCampPageRoutingModule {}
