import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampOnlPageRoutingModule } from './camp-onl-routing.module';

import { CampOnlPage } from './camp-onl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampOnlPageRoutingModule
  ],
  declarations: [CampOnlPage]
})
export class CampOnlPageModule {}
