import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DescripcionProductoComponent } from './pages/descripcion-producto/descripcion-producto.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [{
      path: '',
      redirectTo:'home',
      pathMatch: 'full'
    },
      {
        path: 'home',
      component: HomeComponent

      },
      {
        path: 'carrito',
      component: CarritoComponent

      },
      {
        path: 'descripcionProducto/:id',
      component: DescripcionProductoComponent

      },
      {
        path: 'admin',
      component: AdminComponent

      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'crear-producto',
        component:CrearProductoComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
