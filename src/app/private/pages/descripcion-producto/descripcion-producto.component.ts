import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CarritosService } from '../../services/carritos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.component.html',
  styleUrls: ['./descripcion-producto.component.css'],
})
export class DescripcionProductoComponent {
  producto_id: any;
  producto!:any
  constructor(private route: ActivatedRoute,private productoService:ProductosService,private carritoService:CarritosService,private notificacion:ToastrService) {
    this.route.params.subscribe((params) => {
      this.producto_id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
      // Puedes usar this.id como quieras en tu componente
      this.productoService.porductosOne(this.producto_id).subscribe((data:any)=>{
        this.producto=data.Productos;
      })
    });
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
