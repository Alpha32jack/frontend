import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCampPageRoutingModule } from './edit-camp-routing.module';

import { EditCampPage } from './edit-camp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCampPageRoutingModule
  ],
  declarations: [EditCampPage]
})
export class EditCampPageModule {}
