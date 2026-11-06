import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'casas',
    pathMatch: 'full',
  },
  {
    path: 'casas',
    loadChildren: () => import('./features/casas/casas.module').then((m) => m.CasasModule),
  },
  {
    path: 'personajes',
    loadChildren: () =>
      import('./features/personajes/personajes.module').then((m) => m.PersonajesModule),
  },
  {
    path: 'hechizos',
    loadChildren: () => import('./features/hechizos/hechizos.module').then((m) => m.HechizosModule),
  },
];
