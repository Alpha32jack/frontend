import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampConfigPageRoutingModule } from './camp-config-routing.module';

import { CampConfigPage } from './camp-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampConfigPageRoutingModule
  ],
  declarations: [CampConfigPage]
})
export class CampConfigPageModule {}
