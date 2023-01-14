import {Component, Inject, OnInit} from '@angular/core';
import {ListUserService} from "../../../Service/list-user.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Users} from "../../../Models/Users";

@Component({
  selector: 'app-dialog-update-user',
  templateUrl: './dialog-update-user.component.html',
  styleUrls: ['./dialog-update-user.component.scss']
})
export class DialogUpdateUserComponent implements OnInit {
  dataForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

constructor(private userService: ListUserService,
            private dialog: MatDialog,
            @Inject(MAT_DIALOG_DATA) public editData: any) {}

  ngOnInit() {
 if(this.editData) {
   this.dataForm.controls['username'].setValue(this.editData.username)
   this.dataForm.controls['password'].setValue(this.editData.password)
   this.dataForm.controls['email'].setValue(this.editData.email)
 }


  }

  get user() { return this.dataForm.get('username'); }
  get password() { return this.dataForm.get('password');}
  get email() { return this.dataForm.get('email'); }

  onSaveClick() {

    const success = document.getElementsByClassName('success')[0] as HTMLElement;
    const warningg = document.getElementsByClassName('warningg')[0] as HTMLElement;
    const user = this.dataForm.value as Users;
      this.userService.editUser(this.dataForm.value, this.editData.id).subscribe(res => {
        success.classList.add('active')
        setTimeout(() => {
          success.classList.remove('active')
          window.location.reload();
        }, 2000)

      }, err => {
        warningg.classList.add('active')
        setTimeout(() => {
          warningg.classList.remove('active')
          this.dataForm.reset();
        },2000)
      });


  }

  onNoClick() {
    this.dialog.closeAll();
  }
}
