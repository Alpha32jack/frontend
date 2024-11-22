import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamContPageRoutingModule } from './cam-cont-routing.module';

import { CamContPage } from './cam-cont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamContPageRoutingModule
  ],
  declarations: [CamContPage]
})
export class CamContPageModule {}
