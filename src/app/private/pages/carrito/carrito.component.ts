import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedidos.service';
import { ToastrService } from 'ngx-toastr';
import { CarritosService } from '../../services/carritos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos!:any
  constructor(private carritoService:CarritosService,private toastService:ToastrService){
    this.getProductos();
  }
  vaciar(){
    this.carritoService.vaciar().subscribe((data)=>{
      this.toastService.success('Carrito Vaciado!','Proceso Exitoso');
      this.getProductos()
    })
  }
  getProductos(){
    this.carritoService.carrito().subscribe((data:any)=>{
      console.log(data);
      this.productos=data;
    })
  }
}
