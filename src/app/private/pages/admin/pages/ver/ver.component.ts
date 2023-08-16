import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from 'src/app/private/services/categorias.service';
import { ProductosService } from 'src/app/private/services/productos.service';
import { AuthService } from 'src/app/public/services/auth.service';
@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css'],
})
export class VerComponent {
  productos: any;
  searchTerms: string = '';
  categoriaFilter: number = 0;
  searchForm: FormGroup;
  categorias!: any;
  constructor(
    private readonly productoService: ProductosService,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private toastService: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.userInformation().subscribe((data: any) => {
      if (data.User.rol === 'Cliente') {
        this.toastService.warning(
          'No puedes estar aquii!',
          'Proceso cancelado!'
        );

        this.router.navigate(['/home']);
      }
    });

    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
    this.searchForm.get('search')?.valueChanges.subscribe((data) => {
      this.searchTerms = data;
    });
    this.getProducts();
    this.categoriaService.categorias().subscribe((data: any) => {
      console.log(data.Categorias);
      this.categorias = data.Categorias;
    });
  }
  getProducts() {
    this.productoService.productos().subscribe((data: any) => {
      console.log(data.Productos);
      this.productos = data.Productos.data;
    });
  }
  get filteredItems() {
    if (this.categoriaFilter == 0) {
      return this.productos?.filter((item: any) =>
        item.producto.toLowerCase().includes(this.searchTerms.toLowerCase())
      );
    } else {
      return this.productos?.filter(
        (item: any) =>
          item.producto
            .toLowerCase()
            .includes(this.searchTerms.toLowerCase()) &&
          item.categoria_id == this.categoriaFilter
      );
    }
  }

  delete(id: any) {
    this.productoService.createDelete(id).subscribe((data) => {
      this.toastService.success(
        'Producto eliminado exitosamente!',
        'Proceso Exisoto'
      );
      this.productos = this.productos.filter((item: any) => item.id !== id);
    });
  }
}
