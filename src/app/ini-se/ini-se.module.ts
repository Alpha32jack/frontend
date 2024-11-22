import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniSePageRoutingModule } from './ini-se-routing.module';

import { IniSePage } from './ini-se.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniSePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IniSePage]
})
export class IniSePageModule {}
