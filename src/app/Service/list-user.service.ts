import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../Models/Users";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor(private httpClient: HttpClient) {}

  getListUsers(): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.api_domain}/api/getListUser`)
  }

  deleteUser(id:number) {
    return this.httpClient.delete(`${environment.api_domain}/api/DeleteUser/${id}`)
  }
}
