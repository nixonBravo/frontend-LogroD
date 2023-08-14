import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PublicRoutingModule } from './public-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [PublicComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,PublicRoutingModule,HttpClientModule,CoreModule
  ]
})
export class PublicModule { }
