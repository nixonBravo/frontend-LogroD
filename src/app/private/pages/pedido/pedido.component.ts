import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  constructor(private router:Router,private toastService:ToastrService){
    if(localStorage.getItem('rol')=='Admin'){
      this.toastService.warning('No puedes estar aqui!','Proceso Cancelado')
      this.router.navigate(['/home']);
    }
  }
}
