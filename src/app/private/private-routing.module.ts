import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DescripcionProductoComponent } from './pages/descripcion-producto/descripcion-producto.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

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
    loadChildren: () =>import('./pages/admin/admin.module').then(m=>m.AdminModule),

      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'crear-producto',
        component:CrearProductoComponent
      },
      {
        path:'pedido',
        component:PedidoComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
