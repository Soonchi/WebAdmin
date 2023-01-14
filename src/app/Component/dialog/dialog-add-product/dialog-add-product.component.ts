import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

import {ProductService} from "../../../Service/product.service";
import {Product} from "../../../Models/product";
import {Catalog} from "../../../Models/Catalog";
import {CatalogService} from "../../../Service/catalog.service";
import { DomSanitizer } from '@angular/platform-browser';
import {FileHandle} from "../../../Models/file-handle";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html',
  styleUrls: ['./dialog-add-product.component.scss']
})
export class DialogAddProductComponent implements OnInit {
  dataForm!: FormGroup;
  catalog: Catalog[]= [];
  file!: File
  image!: string;





  constructor(private dialogRef: MatDialogRef<DialogAddProductComponent>,
              private productService: ProductService,
              private formBuilder: FormBuilder,
              private catalogService: CatalogService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      productName: '',
      catalogName: '',
      ageRange: '',
      price: '',
      description: '',
    })

    this.getAllcatalogs()
  }

  // onFileSelected(event: any) {
  //   let fileList: FileList = event.target.files;
  //   if (fileList.length > 0) {
  //     let file: File = fileList[0];
  //     let formData: FormData = new FormData();
  //     formData.append( 'file',file,file.name);
  // }
  // }


  onNoClick():void {
    this.dialogRef.close();
  }

  onAddClick() {
    const success = document.getElementsByClassName('success')[0] as HTMLElement;
    const warningg = document.getElementsByClassName('warningg')[0] as HTMLElement;
    const formData = new FormData();
    formData.append('productName', this.dataForm.value.productName);
    formData.append('catalogName', this.dataForm.value.catalogName);
    formData.append('ageRange', this.dataForm.value.ageRange);
    formData.append('price', this.dataForm.value.price);
    formData.append('description', this.dataForm.value.description);
    formData.append('image', this.image);
    formData.append('file', this.file);

      this.productService.addProduct(formData).subscribe(res => {
        success.classList.add('active')
        setTimeout(() => {
          success.classList.remove('active')
          this.dataForm.reset();
          window.location.reload();
        },2000)

      }, err => {
        warningg.classList.add('active')
        setTimeout(() => {
          warningg.classList.remove('active')
          this.dataForm.reset();
          window.location.reload();
        },2000)
      }
  );

  }


  getAllcatalogs() {
    this.catalogService.getListCatalog().subscribe(res => {
     this.catalog = res
    })

  }


  // onFileSelected(event: any) {
  //   if (event.target.files) {
  //     const file = event.target.files[0];
  //
  //     const fileHandle: FileHandle = {
  //       file: file,
  //       url: this.sanitizer.bypassSecurityTrustUrl(
  //         window.URL.createObjectURL(file)
  //       )
  //     }
  //     this.product.image.push(fileHandle)
  //   }
  // }

  onFileSelected(event: any) {
    if (event.target.files) {
      this.file = event.target.files[0];
      this.image = this.file.name;
    }
  }
}
