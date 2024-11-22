import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartOnlPageRoutingModule } from './part-onl-routing.module';

import { PartOnlPage } from './part-onl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartOnlPageRoutingModule
  ],
  declarations: [PartOnlPage]
})
export class PartOnlPageModule {}
