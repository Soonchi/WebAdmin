import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Dialog} from "@angular/cdk/dialog";
import { MatDialogRef } from '@angular/material/dialog';
import {ListUserService} from "../../../Service/list-user.service";
import {Users} from "../../../Models/Users";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  dataForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    }
  );
  constructor(private dialogRef: MatDialogRef<DialogAddUserComponent>,
              private userservice: ListUserService
              ) {
  }

  get user() { return this.dataForm.get('username'); }
  get password() { return this.dataForm.get('password');}
  get passwordxt() { return this.dataForm.get('passwordxt'); }


  onNoClick():void {
    this.dialogRef.close();
  }
  onAddClick() {
    const pw1 = (<HTMLInputElement>document.getElementById("passwordForm")).value
    const pw2 = (<HTMLInputElement>document.getElementById("passwordFormxt")).value
    const warning = document.getElementsByClassName('warning')[0] as HTMLElement;
    const success = document.getElementsByClassName('success')[0] as HTMLElement;
    const warningg = document.getElementsByClassName('warningg')[0] as HTMLElement;
    const user = this.dataForm.value;
    if (pw1 == pw2) {
    this.userservice.register(user).subscribe(res => {
        warningg.classList.add('active')
        setTimeout(() => {
          warningg.classList.remove('active')
          this.dataForm.reset();
          window.location.reload();
        }, 2000)

      }, err => {
      success.classList.add('active')
        setTimeout(() => {
          success.classList.remove('active')
          this.dataForm.reset();
          window.location.reload();
        },2000)
      });
    } else {
      warning.classList.add('active')
      setTimeout(() => {
        warning.classList.remove('active');
        this.dataForm.reset();
      },3000)

    }
  }
}
