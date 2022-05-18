import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZekrPage } from './zekr.page';

const routes: Routes = [
  {
    path: '',
    component: ZekrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZekrPageRoutingModule {}
