import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PedidoService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  pedido:any
  constructor(private router:Router,private toastService:ToastrService,private pedidoService:PedidoService){
    if(localStorage.getItem('rol')=='Admin'){
      this.toastService.warning('No puedes estar aqui!','Proceso Cancelado')
      this.router.navigate(['/home']);
    }
    this.pedidoService.getPedidos().subscribe((data:any)=>{
      console.log(data)
      this.pedido=data.Pedidos
    })

  }
}
