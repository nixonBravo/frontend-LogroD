import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';

@Injectable({
  providedIn:'root'
})
export class CarritosService {
  api=config.ApiUrl;
  constructor(private readonly http:HttpClient) {}
  vaciar(){
    return this.http.delete(`${this.api}vaciar`);
  }
  eliminarProducto(id:any){
    return this.http.delete(`${this.api}eliminarProducto/${id}`);
  }
  decrementarProducto(body:any){
    return this.http.post(`${this.api}decrementarProducto`,body);
  }
  incrementarProducto(body:any){
    return this.http.post(`${this.api}incrementarProducto`,body);
  }
  addProducto(body:any){
    return this.http.post(`${this.api}addProducto`,body);
  }
  carrito(){
    return this.http.get(`${this.api}carrito`);
  }
}
