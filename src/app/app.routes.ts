import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component'),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component'),
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./components/dashboard/pages/home/home.component'),
      },
      {
        path: 'users',
        title: 'Usuarios',
        loadComponent: () => import('./components/dashboard/pages/tipo-documento/tipo-documento.component'),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

