import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartOnlJuPageRoutingModule } from './part-onl-ju-routing.module';

import { PartOnlJuPage } from './part-onl-ju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartOnlJuPageRoutingModule
  ],
  declarations: [PartOnlJuPage]
})
export class PartOnlJuPageModule {}
