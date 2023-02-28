import {Component, ViewChild} from '@angular/core';
import {DialogUpdateProductComponent} from "../../dialog/dialog-update-product/dialog-update-product.component";
import {DialogAddProductComponent} from "../../dialog/dialog-add-product/dialog-add-product.component";
import {MatDialog} from "@angular/material/dialog";
import {ProductService} from "../../../Service/product.service";
import {Product} from "../../../Models/product";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {OrderService} from "../../../Service/order.service";
import {DialogUpdateStatusComponent} from "../../dialog/dialog-update-status/dialog-update-status.component";

@Component({
  selector: 'app-manager-order',
  templateUrl: './manager-order.component.html',
  styleUrls: ['./manager-order.component.scss']
})
export class ManagerOrderComponent {
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['name','address','phone','productName','quantity', 'price','status' ,'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator

  Path = "http://localhost:3000/";

  constructor(private orderService: OrderService,
              public dialog: MatDialog) {}


  ngOnInit() {
    this.getListOrder()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getListOrder() {
    this.orderService.getListOrder().subscribe((data:any) => {
      this.dataSource.data = data;
    })
  }

  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }



  onEditClick(element: any) {
    this.dialog.open(DialogUpdateStatusComponent,{
      data: element
    })
  }

  // onEditClick(element: any) {
  //   this.dialog.open(DialogUpateCatalogComponent,{
  //     data: element
  //   })
  // }
}
