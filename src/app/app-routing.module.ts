import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import('./private/private.module').then(m=>m.PrivateModule),
    canActivate:[]//aqui va el guardia q protege las rutas privadas

  },
  {
    path: '',
    loadChildren: () =>import('./public/public.module').then(m=>m.PublicModule)

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
