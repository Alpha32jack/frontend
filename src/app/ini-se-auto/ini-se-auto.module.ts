import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniSeAutoPageRoutingModule } from './ini-se-auto-routing.module';

import { IniSeAutoPage } from './ini-se-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniSeAutoPageRoutingModule
  ],
  declarations: [IniSeAutoPage]
})
export class IniSeAutoPageModule {}
