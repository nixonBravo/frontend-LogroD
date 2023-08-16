import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DescripcionProductoComponent } from './pages/descripcion-producto/descripcion-producto.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AllProductComponent } from './pages/home/components/all-product/all-product.component';
import { ProductsComponent } from './pages/home/components/products/products.component';
import { CoreModule } from '../core/core.module';
import { UserComponent } from './pages/user/user.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PrivateComponent, HomeComponent, CarritoComponent, DescripcionProductoComponent, AdminComponent, AllProductComponent, ProductsComponent, UserComponent, CrearProductoComponent],
  imports: [
    PrivateRoutingModule,
    CommonModule,
    CoreModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class PrivateModule { }
