import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../../services/categorias.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{

  /* file!: any; */
  productoForm!: FormGroup;

  /* constructor(
    private fb: FormBuilder,
    private productService: ProductosService,
    private categoryService: CategoriaService,
    private route: Router,
    private notificacion: ToastrService
  ){ } */

  ngOnInit(): void {
    /* this.productoForm = this.fb.group({
      categoria_id: ['', [Validators.required]],
      producto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
    }); */
  }

  /* onFileSelect(event:any){
    this.file = event.target.files[0];
  }

  productoStore(): void{
    if(this.productoForm.valid){
      let body: any = new FormData();
      body.append('categoria_id',this.productoForm.get('categoria_id')?.value);
      body.append('producto',this.productoForm.get('producto')?.value);
      body.append('descripcion',this.productoForm.get('descripcion')?.value);
      body.append('precio',this.productoForm.get('precio')?.value);
      body.append('stock',this.productoForm.get('stock')?.value);
      body.append('imagen',this.file);
      this.productService.createProduct(body).subscribe((data:any)=> {
        console.log(data);

        this.route.navigate(['/home']);
      }, (e)=>{console.log('e->', e)})
    }
  } */

}
