import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifiIndenPageRoutingModule } from './verifi-inden-routing.module';

import { VerifiIndenPage } from './verifi-inden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifiIndenPageRoutingModule
  ],
  declarations: [VerifiIndenPage]
})
export class VerifiIndenPageModule {}
