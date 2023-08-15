import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/shared/guards/auth.guard';
import { PermissionGuard } from './core/shared/guards/permisos.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import('./public/public.module').then(m=>m.PublicModule),
    canActivate:[PermissionGuard]


  },
  {
    path: '',
    loadChildren: () =>import('./private/private.module').then(m=>m.PrivateModule),
    canActivate:[AuthGuard]
   //aqui va el guardia q protege las rutas privadas

  },


  {
    path: '**',
    redirectTo:'/',
    pathMatch:'full',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
