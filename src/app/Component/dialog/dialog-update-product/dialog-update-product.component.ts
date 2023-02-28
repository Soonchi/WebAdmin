import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Catalog} from "../../../Models/Catalog";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../../Service/product.service";
import {CatalogService} from "../../../Service/catalog.service";


@Component({
  selector: 'app-dialog-update-product',
  templateUrl: './dialog-update-product.component.html',
  styleUrls: ['./dialog-update-product.component.scss']
})
export class DialogUpdateProductComponent implements OnInit {
  dataForm!: FormGroup;
  catalog: Catalog[]= [];
  file!: File
  image!: string;
  constructor(private dialogRef: MatDialogRef<DialogUpdateProductComponent>,
              private productService: ProductService,
              private formBuilder: FormBuilder,
              private catalogService: CatalogService,
              @Inject(MAT_DIALOG_DATA) public editData: any) {
  }
  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: '',
      ageRange: '',
      categoryName: '',
      price: '',
      description: '',
    })


    this.getAllcatalogs()
    if(this.editData) {
      this.dataForm.controls['name'].setValue(this.editData.name)
      this.dataForm.controls['ageRange'].setValue(this.editData.ageRange)
      this.dataForm.controls['categoryName'].setValue(this.editData.categoryName)
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
    const formData = new FormData();
    formData.append("id", this.editData.id)
    formData.append('name', this.dataForm.value.name);
    formData.append('categoryName', this.dataForm.value.categoryName);
    formData.append('ageRange', this.dataForm.value.ageRange);
    formData.append('price', this.dataForm.value.price);
    formData.append('description', this.dataForm.value.description);
    formData.append('image', this.image);
    formData.append('file', this.file);
    console.log(formData);
    this.productService.updateProduct(formData).subscribe(res => {
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

  onFileSelected(event: any) {
    if (event.target.files) {
      this.file = event.target.files[0];
      this.image = this.file.name;
    }
  }
}
