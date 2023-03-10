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

  getListProducts(): Observable<any> {
    return this.httpClient.get<any>(`${environment.api_domain}/api/product/getAll`)
  }

  addProduct(product: any){

    return this.httpClient.post<any>(`${environment.api_domain}/api/product/add`, product)
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${environment.api_domain}/api/product/delete/${id}`)
  }

  updateProduct( data:any) {
    return this.httpClient.put<any>(`${environment.api_domain}/api/product/update`, data)
  }
}
