import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from 'src/app/private/services/categorias.service';
import { ProductosService } from 'src/app/private/services/productos.service';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  file!: any;
  productoForm!: FormGroup;
  categorias!: any;
  constructor(
    private fb: FormBuilder,
    private productService: ProductosService,
    private categoryService: CategoriaService,
    private route: Router,
    private notificacion: ToastrService,
    private authService: AuthService
  ) {
    if (localStorage.getItem('rol') === 'Cliente') {
      this.notificacion.warning(
        'No puedes estar aquii!',
        'Proceso cancelado!'
      );
      this.route.navigate(['/home']);
    }
    this.categoryService.categorias().subscribe((data: any) => {
      this.categorias = data.Categorias;
    });
  }

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      categoria_id: ['', [Validators.required]],
      producto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
    });
  }

  onFileSelect(event: any) {
    this.file = event.target.files[0];
  }

  productoStore(): void {
    if (this.productoForm.valid) {
      let body: any = new FormData();
      body.append('categoria_id', this.productoForm.get('categoria_id')?.value);
      body.append('producto', this.productoForm.get('producto')?.value);
      body.append('descripcion', this.productoForm.get('descripcion')?.value);
      body.append('precio', this.productoForm.get('precio')?.value);
      body.append('stock', this.productoForm.get('stock')?.value);
      body.append('imagen', this.file);
      this.productService.createProduct(body).subscribe(
        (data: any) => {
          console.log(data);
          this.notificacion.success(
            'Producto creado correctamente!',
            'Proceso exitoso!'
          );
          this.route.navigate(['/admin/ver']);
        },
        (e) => {
          console.log('e->', e);
        }
      );
    }
  }
}
