import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'demo-page',
    loadComponent: () => import('./demo-page/demo-page.component').then(m => m.DemoPageComponent)
  },
  {
    path: 'content-block',
    loadComponent: () => import('./content-block/content-block.component').then(m => m.ContentBlockComponent)
  },
  {
    path: '',
    redirectTo: 'demo-page',
    pathMatch: 'full'
  }
]; 