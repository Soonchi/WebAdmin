import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SildenavComponent } from './Layout/sildenav/sildenav.component';
import { ManagerUserComponent } from './Component/manager/manager-user/manager-user.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { DialogAddUserComponent } from './Component/dialog/dialog-add-user/dialog-add-user.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {DialogModule} from "@angular/cdk/dialog";
import { DialogUpdateUserComponent } from './Component/dialog/dialog-update-user/dialog-update-user.component';
import { ManagerCatalogComponent } from './Component/manager/manager-catalog/manager-catalog.component';
import { DialogAddCatalogComponent } from './Component/dialog/dialog-add-catalog/dialog-add-catalog.component';
import { DialogUpateCatalogComponent } from './Component/dialog/dialog-upate-catalog/dialog-upate-catalog.component';
import { ManagerProductComponent } from './Component/manager/manager-product/manager-product.component';
import { DialogAddProductComponent } from './Component/dialog/dialog-add-product/dialog-add-product.component';
import {MatSelectModule} from "@angular/material/select";
import { DialogUpdateProductComponent } from './Component/dialog/dialog-update-product/dialog-update-product.component';
import {LoginComponent} from "./Component/login/login.component";
import { ManagerOrderComponent } from './Component/manager/manager-order/manager-order.component';
import {UserService} from "./Service/user.service";
import {AuthGuard} from "./Auth/auth.guard";
import {AuthInterceptor} from "./Auth/auth.interceptor";
import { DialogUpdateStatusComponent } from './Component/dialog/dialog-update-status/dialog-update-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SildenavComponent,
    ManagerUserComponent,
    DialogAddUserComponent,
    DialogUpdateUserComponent,
    ManagerCatalogComponent,
    DialogAddCatalogComponent,
    DialogUpateCatalogComponent,
    ManagerProductComponent,
    DialogAddProductComponent,
    DialogUpdateProductComponent,
    LoginComponent,
    ManagerOrderComponent,
    DialogUpdateStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DialogModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
