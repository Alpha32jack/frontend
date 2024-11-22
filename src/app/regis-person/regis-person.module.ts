import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisPersonPageRoutingModule } from './regis-person-routing.module';

import { RegisPersonPage } from './regis-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisPersonPageRoutingModule
  ],
  declarations: [RegisPersonPage]
})
export class RegisPersonPageModule {}
