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
  decrementarProducto(id:any){
    return this.http.post(`${this.api}decrementarProducto/${id}`,{});
  }
  incrementarProducto(id:any){
    return this.http.post(`${this.api}incrementarProducto/${id}`,{});
  }
  addProducto(body:any){
    return this.http.post(`${this.api}addProducto`,body);
  }
  carrito(){
    return this.http.get(`${this.api}carrito`);
  }
}
