import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/private/services/categorias.service';
import { ProductosService } from 'src/app/private/services/productos.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent {
  productos!:any
  categorias!:any
  searchTerms: string = '';
  categoriaFilter: number = 1;
  searchForm!:FormGroup
  constructor(private productosService:ProductosService,private categoriaService:CategoriaService,private fb:FormBuilder){
    this.searchForm=this.fb.group({
      'search':['',Validators.required]
    });
    this.searchForm.get('search')?.valueChanges.subscribe((data)=>{
      this.searchTerms=data;
    })
    this.productosService.productos().subscribe((data:any)=>{
      this.productos=data.Productos.data;
      console.log(data.Productos.data)
    })
    this.categoriaService.categorias().subscribe((data:any)=>{
      console.log(data.Categorias)
      this.categorias=data.Categorias
    })
  }
  get filteredItems() {
    const productos=this.productos?.filter((item:any) =>
    item.producto.toLowerCase().includes(this.searchTerms.toLowerCase()) &&
    item.categoria_id==this.categoriaFilter
  );
  console.log(productos)
    return productos;
  }
}
