import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from "@angular/forms";
import { OrderService } from 'src/app/Service/order.service';
import {UpdateStatus} from "../../../Models/UpdateStatus";

@Component({
  selector: 'app-dialog-update-status',
  templateUrl: './dialog-update-status.component.html',
  styleUrls: ['./dialog-update-status.component.scss']
})
export class DialogUpdateStatusComponent implements OnInit {
  dataForm!: FormGroup;
  listStatus = [
    "",
    "Chờ xử lý",
    "Đã nhận đơn hàng",
    "Đơn hàng đang được giao",
    "Đã giao thành công"
  ]
   orderDetails: any[] = [];

  constructor(private dialogRef: MatDialogRef<DialogUpdateStatusComponent>,
              private orderService: OrderService,
              @Inject(MAT_DIALOG_DATA) public editData: any) {
  }
  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      status: new FormControl,
    })
    this.getOrder()

  }

  onSaveClick(id: any) {
    const data: UpdateStatus = {
      id: id,
      status: this.dataForm.value.status
    }
    this.orderService.updateStatus(data).subscribe(data => {
      window.location.reload();
    })
  }
  getOrder() {
    this.orderService.getListOrder().subscribe((data:any) => {
      this.orderDetails = data;
    })
  }
}
