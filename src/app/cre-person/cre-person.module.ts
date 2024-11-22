import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrePersonPageRoutingModule } from './cre-person-routing.module';

import { CrePersonPage } from './cre-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrePersonPageRoutingModule
  ],
  declarations: [CrePersonPage]
})
export class CrePersonPageModule {}
