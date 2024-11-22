import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajeInvePageRoutingModule } from './personaje-inve-routing.module';

import { PersonajeInvePage } from './personaje-inve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajeInvePageRoutingModule
  ],
  declarations: [PersonajeInvePage]
})
export class PersonajeInvePageModule {}
