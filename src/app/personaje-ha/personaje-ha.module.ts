import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajeHaPageRoutingModule } from './personaje-ha-routing.module';

import { PersonajeHaPage } from './personaje-ha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajeHaPageRoutingModule
  ],
  declarations: [PersonajeHaPage]
})
export class PersonajeHaPageModule {}
