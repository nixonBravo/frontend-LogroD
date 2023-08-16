import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarritosService } from 'src/app/private/services/carritos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() producto!:any
  constructor(private carritoService:CarritosService,private notificacion:ToastrService){

  }
  addCarrito(){
    const body={
      producto_id:this.producto.id,
      cantidad:1
    }
    this.carritoService.addProducto(body).subscribe((data)=>{
      this.notificacion.success('Producto añadido al carrito','Proceso exitoso!');
    })
  }
}
