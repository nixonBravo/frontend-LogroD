import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from 'src/app/private/services/categorias.service';
import { ProductosService } from 'src/app/private/services/productos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id:any;
  url!:string;
  productoForm!: FormGroup;
 categorias!:any
   constructor(
    private fb: FormBuilder,
    private productService: ProductosService,
    private categoryService: CategoriaService,
    private route: Router,
    private notificacion: ToastrService,
    private router:ActivatedRoute
  ){
    this.router.paramMap.subscribe(params => {
      this.id = params.get('id');
      // Ahora puedes usar this.id en tu componente
      this.productService.porductosOne(this.id).subscribe((data:any)=>{
        console.log(data.Productos)
        const producto=data.Productos;
        this.productoForm.setValue({
          categoria_id:producto.categoria_id ,
      producto: producto.producto,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
        })
        this.url=producto.url
      })
    });
    this.categoryService.categorias().subscribe((data:any)=>{
      this.categorias=data.Categorias;
    })
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



  productoStore(): void{
    if(this.productoForm.valid){
      let body: any = new FormData();
      body.append('categoria_id',this.productoForm.get('categoria_id')?.value);
      body.append('producto',this.productoForm.get('producto')?.value);
      body.append('descripcion',this.productoForm.get('descripcion')?.value);
      body.append('precio',this.productoForm.get('precio')?.value);
      body.append('stock',this.productoForm.get('stock')?.value);
      this.productService.createUpdate(body,this.id).subscribe((data:any)=> {
        console.log(data);
        this.notificacion.success('Producto editado correctamente!','Proceso exitoso!');
        this.route.navigate(['/admin/ver']);
      }, (e)=>{console.log('e->', e)})
    }else{
      this.notificacion.error('Llene los campos!','Proceso exitoso!');

    }
  }
}
