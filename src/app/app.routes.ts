import { Routes } from '@angular/router';

export const routes: Routes = [
  {
		path: 'auth',
    loadComponent: () => import('./auth/auth').then(m => m.Auth),
		loadChildren: () => import('./auth/auth.routes')
	},
	{
		path: 'geovisor',
		loadComponent: () => import('./geovisor/geovisor').then(m => m.Geovisor),
		loadChildren: () => import('./geovisor/geovisor.routes')
	},
	{
		path: '',
		redirectTo: '/geovisor',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/auth/error',
		pathMatch: 'full',
	},
];
