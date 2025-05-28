import { Injectable } from '@angular/core';
//PETICIONES DEL CLIENTE HACIA EL SERVIDOR
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url="http://localhost:3000/";

  constructor( private http:HttpClient) {  }

  guardar(producto:object){
    return this.http.post<any>(this.url,producto); //cualquier peticion s etransforma en cualquier cosa
  }

}
