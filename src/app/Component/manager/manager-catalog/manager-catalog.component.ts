import {Component, OnInit, ViewChild} from '@angular/core';
import {Catalog} from "../../../Models/Catalog";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {CatalogService} from "../../../Service/catalog.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddUserComponent} from "../../dialog/dialog-add-user/dialog-add-user.component";
import {DialogAddCatalogComponent} from "../../dialog/dialog-add-catalog/dialog-add-catalog.component";
import {DialogUpdateUserComponent} from "../../dialog/dialog-update-user/dialog-update-user.component";
import {DialogUpateCatalogComponent} from "../../dialog/dialog-upate-catalog/dialog-upate-catalog.component";

@Component({
  selector: 'app-manager-catalog',
  templateUrl: './manager-catalog.component.html',
  styleUrls: ['./manager-catalog.component.scss']
})
export class ManagerCatalogComponent implements OnInit {
  ELEMENT_DATA: Catalog[] = [];
  displayedColumns: string[] = ['catalogId', 'catalogName','action'];
  dataSource = new MatTableDataSource<Catalog>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private catalogService: CatalogService,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.getAllcatalogs()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllcatalogs() {
    this.catalogService.getListCatalog().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    })
  }

  openDialogAdd() {
    this.dialog.open(DialogAddCatalogComponent)
  }

  hanldeDelete(id: number) {
    this.catalogService.deleteCatalog(id).subscribe(res => {
      this.getAllcatalogs();
    } )
  }

  onEditClick(element: any) {
    this.dialog.open(DialogUpateCatalogComponent,{
      data: element
    })
  }

}
