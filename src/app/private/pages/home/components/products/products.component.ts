import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarritosService } from 'src/app/private/services/carritos.service';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() producto!:any
  rol:any
  constructor(private carritoService:CarritosService,private notificacion:ToastrService,private eventEmittersErvice:EventEmitterService){
    this.rol=localStorage.getItem('rol');
  }
  addCarrito(){
    const body={
      producto_id:this.producto.id,
      cantidad:1
    }
    this.carritoService.addProducto(body).subscribe((data)=>{
      this.eventEmittersErvice.setEvent({
        event:'CARGAR_PRODUCTOS'
      })
      this.notificacion.success('Producto añadido al carrito','Proceso exitoso!');

    })
  }
}
