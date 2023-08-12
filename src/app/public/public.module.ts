import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [PublicComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,PublicRoutingModule
  ]
})
export class PublicModule { }
