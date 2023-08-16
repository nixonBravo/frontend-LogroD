import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VerComponent } from './pages/ver/ver.component';
import { CrearComponent } from './pages/crear/crear.component';
import { EditComponent } from './pages/edit/edit.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    VerComponent,
    CrearComponent,
    EditComponent,
    NavbarComponent,
AdminComponent
  ],
  imports: [
    CommonModule,RouterModule,
    ReactiveFormsModule,
    FormsModule,RouterModule,AdminRoutingModule,
  ]
})
export class AdminModule { }
