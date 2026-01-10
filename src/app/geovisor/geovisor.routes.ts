import { Routes } from '@angular/router';

export default [
			{
				path: 'map',
        title:'GeoVisor MSI',
				loadComponent: () => import('./pages/map/map').then(m => m.Map),
			},
      {
				path: 'dashboard',
        title:'Dashboard',
				loadComponent: () => import('./pages/dashboard/dashboard').then ( m => m.Dashboard),
			},
			{
				path: '',
				redirectTo: 'map',
				pathMatch: 'full',
			},
			{
				path: '**',
				redirectTo: 'map',
				pathMatch: 'full',
			},
] as Routes

