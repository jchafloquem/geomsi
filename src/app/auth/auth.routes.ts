import { Routes } from '@angular/router';


export default [
			{
				path: 'login',
        title:'Login',
				loadComponent: () => import('./pages/login/login').then(m => m.Login),
			},
			{
				path: 'welcome',
        title:'Bienvenidos',
				loadComponent: () => import('./pages/welcome/welcome').then(m => m.Welcome),
			},
	  	{
				path: 'error',
				loadComponent: () => import('./pages/error/error').then(m => m.Error),
			},
			{
				path: '',
				redirectTo: 'welcome',
				pathMatch: 'full',
			},
			{
				path: '**',
				redirectTo: 'error',
				pathMatch: 'full',
			},
] as Routes
