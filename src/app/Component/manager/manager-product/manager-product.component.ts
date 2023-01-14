import {Component, OnInit, ViewChild} from '@angular/core';
import {Users} from "../../../Models/Users";
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../../Models/product";
import {ProductService} from "../../../Service/product.service";
import {MatPaginator} from "@angular/material/paginator";
import {CatalogService} from "../../../Service/catalog.service";
import {MatDialog} from "@angular/material/dialog";
import {Catalog} from "../../../Models/Catalog";
import {DialogAddCatalogComponent} from "../../dialog/dialog-add-catalog/dialog-add-catalog.component";
import {DialogUpateCatalogComponent} from "../../dialog/dialog-upate-catalog/dialog-upate-catalog.component";
import {DialogAddProductComponent} from "../../dialog/dialog-add-product/dialog-add-product.component";
import {DialogUpdateProductComponent} from "../../dialog/dialog-update-product/dialog-update-product.component";


@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.scss']
})
export class ManagerProductComponent implements OnInit {
  ELEMENT_DATA: Product[] = [];
  displayedColumns: string[] = ['productId', 'productName','ageRange','catalogName','image','price', 'description' ,'action'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator

  Path = "http://localhost:3000/";

  constructor(private productService: ProductService,
              public dialog: MatDialog) {}


  ngOnInit() {
    this.getAllProduct()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllProduct() {
    const res = this.productService.getListProducts();
    res.subscribe(report => this.dataSource.data = report as unknown as Product[])
  }

  openDialogAdd() {
    this.dialog.open(DialogAddProductComponent)
  }

  hanldeDelete(productId: number) {
    this.productService.deleteProduct(productId).subscribe(res => {
      this.getAllProduct();
    } )
  }

  onEditClick(element: any) {
    this.dialog.open(DialogUpdateProductComponent,{
      data: element
    })
  }

  // onEditClick(element: any) {
  //   this.dialog.open(DialogUpateCatalogComponent,{
  //     data: element
  //   })
  // }
}


