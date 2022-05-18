import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/1',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./Pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'indexing',
    loadChildren: () => import('./Pages/indexing/indexing.module').then( m => m.IndexingPageModule)
  },
  {
    path: 'target',
    loadChildren: () => import('./Pages/target/target.module').then( m => m.TargetPageModule)
  },
  {
    path: 'zekr',
    loadChildren: () => import('./Pages/zekr/zekr.module').then( m => m.ZekrPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
