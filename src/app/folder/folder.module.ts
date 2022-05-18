import { IndexingPageModule } from './../Pages/indexing/indexing.module';
import { WerdComponent } from './../Components/werd/werd.component';
import { TimingComponent } from './../Components/timing/timing.component';
import { QuraanComponent } from './../Components/quraan/quraan.component';
import { AzkarComponent } from './../Components/azkar/azkar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { HomeComponent } from '../Components/home/home.component';
import { CounterComponent } from '../Components/counter/counter.component';
import { AboutComponent } from '../Components/about/about.component';
import { SettingsComponent } from '../Components/settings/settings.component';
import { ZekrPageModule } from '../Pages/zekr/zekr.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule , 
    IndexingPageModule
  ],
  declarations: [FolderPage , HomeComponent , CounterComponent ,ZekrPageModule,
     AboutComponent , AzkarComponent , QuraanComponent ,SettingsComponent , TimingComponent , WerdComponent ]
})
export class FolderPageModule {}
