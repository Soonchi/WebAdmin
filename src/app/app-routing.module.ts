import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SildenavComponent} from "./Layout/sildenav/sildenav.component";
import {ManagerUserComponent} from "./Component/manager/manager-user/manager-user.component";
import {ManagerCatalogComponent} from "./Component/manager/manager-catalog/manager-catalog.component";
import {ManagerProductComponent} from "./Component/manager/manager-product/manager-product.component";


const routes: Routes = [
  {path: '',pathMatch:'full', component:ManagerUserComponent},
  {path: 'sildenav', component:SildenavComponent},
  {path: 'manager-user', component:ManagerUserComponent},
  {path: 'manager-catalog', component:ManagerCatalogComponent},
  {path: 'manager-product', component:ManagerProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
