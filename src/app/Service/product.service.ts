import {Injectable, SecurityContext} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../Models/product";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";
import {Form} from "@angular/forms";



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private file: any;



  constructor(private httpClient: HttpClient) { }

  getListProducts(): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.api_domain}/api/getAllProduct`)
  }

  addProduct(product: any){

    return this.httpClient.post<any>(`${environment.api_domain}/api/addProduct`, product)
  }

  deleteProduct(productId: number) {
    return this.httpClient.delete(`${environment.api_domain}/api/deleteProduct/${productId}`)
  }

  updateProduct(data:any, productId: number) {
    return this.httpClient.put<any>(`${environment.api_domain}/api/editProduct/`+ productId, data)
  }
}
