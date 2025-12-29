import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login').then(m => m.Login)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register').then(m => m.Register)
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'create-post',
        loadComponent: () => import('./features/create-post/create-post/create-post').then(m => m.CreatePost)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./features/analytics/analytics/analytics').then(m => m.Analytics)
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings/settings').then(m => m.Settings)
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];