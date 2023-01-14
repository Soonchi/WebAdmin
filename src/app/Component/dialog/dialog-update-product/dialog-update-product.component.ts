import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Catalog} from "../../../Models/Catalog";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../../Service/product.service";
import {CatalogService} from "../../../Service/catalog.service";
import {Users} from "../../../Models/Users";
import {Product} from "../../../Models/product";

@Component({
  selector: 'app-dialog-update-product',
  templateUrl: './dialog-update-product.component.html',
  styleUrls: ['./dialog-update-product.component.scss']
})
export class DialogUpdateProductComponent implements OnInit {
  dataForm!: FormGroup;
  catalog: Catalog[]= [];

  constructor(private dialogRef: MatDialogRef<DialogUpdateProductComponent>,
              private productService: ProductService,
              private formBuilder: FormBuilder,
              private catalogService: CatalogService,
              @Inject(MAT_DIALOG_DATA) public editData: any) {
  }
  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      productName: '',
      ageRange: '',
      catalogName: '',
      image: '',
      price: '',
      description: '',
    })


    this.getAllcatalogs()
    if(this.editData) {
      this.dataForm.controls['productName'].setValue(this.editData.productName)
      this.dataForm.controls['ageRange'].setValue(this.editData.ageRange)
      this.dataForm.controls['catalogName'].setValue(this.editData.catalogName)
      this.dataForm.controls['image'].setValue(this.editData.image)
      this.dataForm.controls['price'].setValue(this.editData.price)
      this.dataForm.controls['description'].setValue(this.editData.description)
    }
  }


  onNoClick():void {
    this.dialogRef.close();
  }
  getAllcatalogs() {
    this.catalogService.getListCatalog().subscribe(res => {
      this.catalog = res
    })

  }

  onSaveClick() {

    const success = document.getElementsByClassName('success')[0] as HTMLElement;
    const warningg = document.getElementsByClassName('warningg')[0] as HTMLElement;
    this.productService.updateProduct(this.dataForm.value, this.editData.productId).subscribe(res => {
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

  onOption(e: any) {
    const catalogName = this.dataForm.controls['catalogName'] as FormArray;
    catalogName.push(new FormControl(e.target.checked))
  }
}
