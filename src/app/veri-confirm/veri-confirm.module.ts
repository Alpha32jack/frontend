import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeriConfirmPageRoutingModule } from './veri-confirm-routing.module';

import { VeriConfirmPage } from './veri-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeriConfirmPageRoutingModule
  ],
  declarations: [VeriConfirmPage]
})
export class VeriConfirmPageModule {}
