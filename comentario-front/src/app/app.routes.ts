import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./comentario-list/comentario-list.component')
  },
  {
    path: 'crear',
    loadComponent: () => import('./comentario-crear/comentario-crear.component')
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./comentario-editar/comentario-editar.component')
  }
];
