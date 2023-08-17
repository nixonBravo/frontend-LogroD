import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarritosService } from 'src/app/private/services/carritos.service';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';

@Component({
  selector: 'app-card-carrito',
  templateUrl: './card-carrito.component.html',
  styleUrls: ['./card-carrito.component.css']
})
export class CardCarritoComponent implements AfterViewInit {
  constructor(private carritoService:CarritosService,private notificacion:ToastrService,private eventEmitterservice:EventEmitterService){}
  ngAfterViewInit(): void {
    this.cantidad=this.producto.pivot.cantidad
    console.log(this.producto)
  }
  cantidad:any;

  @Input() producto!:any
  reducir(){
    this.carritoService.decrementarProducto(this.producto.producto_carrito).subscribe((data)=>{
      this.cantidad--;
      this.notificacion.success("Decrementado producto",'Proceso Exitoso!');
    })
  }
  aumentar(){
    this.carritoService.incrementarProducto(this.producto.producto_carrito).subscribe((data)=>{
      this.cantidad++;
      this.notificacion.success("Incrementado producto",'Proceso Exitoso!');
    })
  }
  quitar(){
    this.carritoService.eliminarProducto(this.producto.producto_carrito).subscribe((data)=>{
      this.notificacion.success("Producto Eliminado",'Proceso Exitoso!');
  this.eventEmitterservice.setEvent({
    event:'QUITAR_PRODUCTO'
  })
    })
  }
}
