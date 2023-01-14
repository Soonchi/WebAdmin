import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CatalogService} from "../../../Service/catalog.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogAddCatalogComponent} from "../dialog-add-catalog/dialog-add-catalog.component";
import {Users} from "../../../Models/Users";
import {Catalog} from "../../../Models/Catalog";

@Component({
  selector: 'app-dialog-upate-catalog',
  templateUrl: './dialog-upate-catalog.component.html',
  styleUrls: ['./dialog-upate-catalog.component.scss']
})
export class DialogUpateCatalogComponent implements OnInit {
  dataForm!: FormGroup;
  constructor(private dialogRef: MatDialogRef<DialogAddCatalogComponent>,
              private catalogService: CatalogService,
              private formBuild: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData: any) {}


  ngOnInit(): void {
    this.dataForm = this.formBuild.group({

      catalogName: ''
    })

    if(this.editData) {
      this.dataForm.controls['catalogName'].setValue(this.editData.catalogName)
    }
  }

  onNoClick():void {
    this.dialogRef.close();
  }

  onSaveClick() {

    const success = document.getElementsByClassName('success')[0] as HTMLElement;
    const warningg = document.getElementsByClassName('warningg')[0] as HTMLElement;
    const catalog = this.dataForm.value as Catalog;
    this.catalogService.updateCatalog(catalog, this.editData.catalogId).subscribe(res => {
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
}
