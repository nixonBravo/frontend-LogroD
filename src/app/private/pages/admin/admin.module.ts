import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VerComponent } from './pages/ver/ver.component';
import { CrearComponent } from './pages/crear/crear.component';
import { EditComponent } from './pages/edit/edit.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    VerComponent,
    CrearComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,RouterModule,AdminRoutingModule
  ]
})
export class AdminModule { }
