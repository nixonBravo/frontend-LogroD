import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';

@Injectable({
  providedIn:'root'
})
export class PedidoService {
  api=config.ApiUrl;
  constructor(private readonly http:HttpClient) {}
  getPedidos(){
    return this.http.get(`${this.api}pedidos`);
  }
  comprar(body:any){
    return this.http.post(`${this.api}comprar`,body);
  }

}
