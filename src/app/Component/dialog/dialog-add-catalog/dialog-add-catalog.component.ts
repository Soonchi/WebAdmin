import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {CatalogService} from "../../../Service/catalog.service";
import {Catalog} from "../../../Models/Catalog";
import {Users} from "../../../Models/Users";

@Component({
  selector: 'app-dialog-add-catalog',
  templateUrl: './dialog-add-catalog.component.html',
  styleUrls: ['./dialog-add-catalog.component.scss']
})
export class DialogAddCatalogComponent implements OnInit {
dataForm!: FormGroup;

  constructor(private dialogRef: MatDialogRef<DialogAddCatalogComponent>,
              private catalogService: CatalogService,
              private formBuild: FormBuilder) {}

  ngOnInit(): void {
        this.dataForm = this.formBuild.group({
          catalogName: ''
        })
    }

  onNoClick():void {
    this.dialogRef.close();
  }

  onAddClick() {
    const success = document.getElementsByClassName('success')[0] as HTMLElement;
    const warningg = document.getElementsByClassName('warningg')[0] as HTMLElement;
    const catalog = this.dataForm.value as Catalog;
      this.catalogService.addCatalog(catalog).subscribe(res => {
        success.classList.add('active')
        setTimeout(() => {
          success.classList.remove('active')
          this.dataForm.reset();
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
