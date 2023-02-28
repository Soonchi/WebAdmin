import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getListOrder() {
    return this.httpClient.get(`${environment.api_domain}/api/order/getListOrder`)
  }

  updateStatus(data: any) {
    return this.httpClient.post(`${environment.api_domain}/api/order/updateStatus`, data)
  }
}
