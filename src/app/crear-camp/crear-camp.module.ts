import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCampPageRoutingModule } from './crear-camp-routing.module';

import { CrearCampPage } from './crear-camp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCampPageRoutingModule
  ],
  declarations: [CrearCampPage]
})
export class CrearCampPageModule {}
