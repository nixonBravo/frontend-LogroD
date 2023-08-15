import { Component } from '@angular/core';
import { ProductosService } from 'src/app/private/services/productos.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {
  productos!:any
  constructor(private productosService:ProductosService){
    this.productosService.productos().subscribe((data:any)=>{
      this.productos=data.Productos.data;
      console.log(data.Productos.data)
    })
  }
}
