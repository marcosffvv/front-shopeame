import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class LlamadaService {

  dbUrl: string = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';
  product: any;
  id!: number;

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.dbUrl)
  }
  getProduct(id: number){
    return this.http.get(`${this.dbUrl}/${id}`)
  }
  postProduct(product: any){
    return this.http.post(this.dbUrl, product);
  }
  putProduct(id: number, product: any){
    return this.http.put(`${this.dbUrl}/${id}`, product);
  }

}
