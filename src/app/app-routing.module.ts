import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SildenavComponent} from "./Layout/sildenav/sildenav.component";
import {ManagerUserComponent} from "./Component/manager-user/manager-user.component";

const routes: Routes = [
  {path: '', component:SildenavComponent},
  {path: 'sildenav', component:SildenavComponent},
  {path: 'manager-user', component:ManagerUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
