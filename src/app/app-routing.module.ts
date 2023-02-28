import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SildenavComponent} from "./Layout/sildenav/sildenav.component";
import {ManagerUserComponent} from "./Component/manager/manager-user/manager-user.component";
import {ManagerCatalogComponent} from "./Component/manager/manager-catalog/manager-catalog.component";
import {ManagerProductComponent} from "./Component/manager/manager-product/manager-product.component";
import {LoginComponent} from "./Component/login/login.component";
import {ManagerOrderComponent} from "./Component/manager/manager-order/manager-order.component";
import {AuthGuard} from "./Auth/auth.guard";


const routes: Routes = [
  {path: '',pathMatch:'full', component:LoginComponent},
  {path: 'sildenav', component:SildenavComponent},
  {path: 'manager-user', component:ManagerUserComponent, canActivate:[AuthGuard]},
  {path: 'manager-catalog', component:ManagerCatalogComponent, canActivate:[AuthGuard] },
  {path: 'manager-product', component:ManagerProductComponent, canActivate:[AuthGuard]},
  {path: 'manager-order', component:ManagerOrderComponent, canActivate:[AuthGuard]},
  {path: 'manager-order', component:ManagerOrderComponent, canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
