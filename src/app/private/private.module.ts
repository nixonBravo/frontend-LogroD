import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DescripcionProductoComponent } from './pages/descripcion-producto/descripcion-producto.component';
import { AllProductComponent } from './pages/home/components/all-product/all-product.component';
import { ProductsComponent } from './pages/home/components/products/products.component';
import { CoreModule } from '../core/core.module';
import { UserComponent } from './pages/user/user.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardCarritoComponent } from './pages/carrito/components/card-carrito/card-carrito.component';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { PedidoComponent } from './pages/pedido/pedido.component';



@NgModule({
  declarations: [PrivateComponent, HomeComponent, CarritoComponent, DescripcionProductoComponent, AllProductComponent, ProductsComponent, UserComponent, CrearProductoComponent, CardCarritoComponent, PedidoComponent],
  imports: [
    PrivateRoutingModule,
    CommonModule,
    CoreModule,
    ReactiveFormsModule,FormsModule,ToastrModule.forRoot({
      timeOut: 1500,
      positionClass:'toast-bottom-right'
    }),
  ]
})
export class PrivateModule { }
