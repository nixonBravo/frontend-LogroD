import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';

@Injectable({
  providedIn:'root'
})
export class CategoriaService {
  api=config.ApiUrl;
  constructor(private readonly http:HttpClient) {}
  categorias(){
    return this.http.get(`${this.api}categorias`);
  }
  categoriasUna(id:any){
    return this.http.get(`${this.api}categorias/${id}`);
  }
  categoriaCreate(body:any){
    return this.http.post(`${this.api}categoria-store`,body);
  }
  categoriaUpdate(id:any,body:any){
    return this.http.post(`${this.api}categoria-update/${id}`,body);
  }
  categoriaDelete(id:any,body:any){
    return this.http.delete(`${this.api}categoria-delete/${id}`,body);
  }
}
