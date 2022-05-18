import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexingPage } from './indexing.page';

const routes: Routes = [
  {
    path: '',
    component: IndexingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexingPageRoutingModule {}
