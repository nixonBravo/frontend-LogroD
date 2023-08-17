import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedidos.service';
import { ToastrService } from 'ngx-toastr';
import { CarritosService } from '../../services/carritos.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitterService } from '../../services/eventEmitter.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  productoForm!: any;
  productos!: any;
  constructor(
    private carritoService: CarritosService,
    private toastService: ToastrService,
    private pedidoService: PedidoService,
    private router: Router,
    private fb: FormBuilder,
    private eventEmitterService: EventEmitterService
  ) {
    if (localStorage.getItem('rol') === 'Admin') {
      this.toastService.warning('No puedes estar aqui!', 'Proceso Cancelado');
      this.router.navigate(['/home']);
    }
    this.buildForm();
    this.getProductos();
    this.eventEmitterService.getEvent().subscribe((event) => {
      if (event.event == 'QUITAR_PRODUCTO') {
        this.getProductos();
      }
    });
    /* this.pedidoService.getPedidos().subscribe((data)=>{
      console.log(data)
    }) */
  }
  vaciar() {
    this.carritoService.vaciar().subscribe((data) => {
      this.toastService.success('Carrito Vaciado!', 'Proceso Exitoso');
      this.productos = [];
    });
  }
  getProductos() {
    this.carritoService.carrito().subscribe((data: any) => {
      console.log(data);
      this.productos = data;
    });
  }
  crearPedido(form: any) {
    if (this.productoForm.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.productoForm.controls).forEach((control: any) =>
        control.markAsTouched()
      );
      return;
    } else {
      console.log('crear pedido');
      this.pedidoService.comprar(form).subscribe((data) => {
        this.toastService.success(
          'Pedido creado exitosamente!',
          'Proceso Exitoso'
        );
        this.router.navigate(['/pedido']);
      });
    }
  }
  buildForm() {
    this.productoForm = this.fb.group({
      descripcion: ['', [Validators.required]],
      celular: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
    });
  }
}
