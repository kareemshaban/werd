import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexingPageRoutingModule } from './indexing-routing.module';

import { IndexingPage } from './indexing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexingPageRoutingModule
  ],
  declarations: [IndexingPage]
})
export class IndexingPageModule {}
