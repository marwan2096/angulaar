import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  // base_url = "https://fakestoreapi.com";
  base_url="http://localhost:8000";
  constructor(public myproduct:HttpClient , public Product:ProductService) {}

  createNewCart(Model:any){
    return this.myproduct.post(this.base_url + 'http://localhost:8000"/api/cart',Model)
  }


}
