import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZekrPageRoutingModule } from './zekr-routing.module';

import { ZekrPage } from './zekr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZekrPageRoutingModule
  ],
  declarations: [ZekrPage]
})
export class ZekrPageModule {}
