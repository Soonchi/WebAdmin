import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Users} from "../Models/Users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  httpClient: HttpClient) {}
  register(user: Users) {
    return  this.httpClient.post<Users>(`${environment.api_domain}/api/auth/registry`, user);
  }
  login(user: Users) {
    return  this.httpClient.post<Users>(`${environment.api_domain}/api/auth/login`, user)
  }

  edit(id: number, data: any) {
    return this.httpClient.post<any>(`${environment.api_domain}/api/editUser`+ id, data)
  }

  setToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  setRole(role: []) {
    localStorage.setItem("role", JSON.stringify(role))
  }

  getRole() {
    localStorage.getItem("role")
  }

  getToken() {
    localStorage.getItem("accessToken")
  }

  clear() {
    localStorage.clear()
  }






}
