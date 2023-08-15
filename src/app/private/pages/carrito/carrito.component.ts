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
  constructor(private pedidoService:PedidoService,private toastService:ToastrService,private carritoService:CarritosService){
    this.pedidoService.getPedidos().subscribe((data)=>{
      console.log(data);
    })
  }
  vaciar(){
    this.carritoService.vaciar().subscribe((data)=>{
      this.toastService.success('Carrito Vaciado!','Proceso Exitoso');
    })
  }
}
