import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ListUserService} from "../../../Service/list-user.service";
import {Users} from "../../../Models/Users";
import {DialogAddUserComponent} from "../../dialog/dialog-add-user/dialog-add-user.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogUpdateUserComponent} from "../../dialog/dialog-update-user/dialog-update-user.component";


@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.scss']
})
export class ManagerUserComponent implements OnInit {
  ELEMENT_DATA: Users[] = [];
  displayedColumns: string[] = ['id', 'username', 'password', 'email','action'];
  dataSource = new MatTableDataSource<Users>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: ListUserService, public dialog: MatDialog ) {}

ngOnInit() {
  this.getListUser();
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


getListUser() {
  let resp = this.userService.getListUsers();
  resp.subscribe(report => this.dataSource.data = report as unknown as Users[])
}

hanldeDelete(id: number) {
    this.userService.deleteUser(id).subscribe(res => {
      this.getListUser();
    } )
}

  openDialogAdd() {
    this.dialog.open(DialogAddUserComponent)
  }

  onEditClick(element: any) {
    this.dialog.open(DialogUpdateUserComponent,{
      data: element
    })
  }









}









