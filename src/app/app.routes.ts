import { Routes } from '@angular/router';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@shared/components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list.component').then(m => m.ListComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./domains/info/pages/about/about.component').then(m => m.AboutComponent),
      },
      {
        path: 'product/:id',
        loadComponent: () => import('@products/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
      }
    ]
  }
  ,
  {
    path: '**',
    loadComponent: () => import( './domains/info/pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },


];
