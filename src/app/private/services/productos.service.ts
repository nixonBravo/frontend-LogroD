import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';

@Injectable({
  providedIn:'root'
})
export class ProductosService {
  api=config.ApiUrl;
  constructor(private readonly http:HttpClient) {}
  productos(){
    return this.http.get(`${this.api}productos`);
  }
  porductosOne(id:any){
    return this.http.get(`${this.api}producto/${id}`);
  }
  search(body:any){
    return this.http.post(`${this.api}search`,body);
  }
  createProduct(body:any){
    return this.http.post(`${this.api}producto-store`,body);
  }
  createUpdate(body:any,id:any){
    return this.http.post(`${this.api}producto-update/${id}`,body);
  }
  createDelete(id:any){
    return this.http.delete(`${this.api}producto-delete/${id}`);
  }

}
