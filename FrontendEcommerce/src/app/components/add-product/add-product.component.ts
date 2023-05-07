import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  public url:any;
  constructor() {
    this.addProductForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.initalizeProductForm();
  }

  initalizeProductForm() {
    this.addProductForm = new FormGroup({
      productName: new FormControl(),
      productPrice: new FormControl(),
      description: new FormControl(),
      fileUpload: new FormControl(),
      fileSource: new FormControl(),
    });
  }

  getFormData() {
    console.log(this.addProductForm.value);
  }

  getFilesData(event: any) {
    const fileReader = new FileReader();
    let uploadFiles = event && event.target.files[0];
    if(!uploadFiles) return;
    fileReader.readAsDataURL(uploadFiles);
    fileReader.onloadend = ()=>{
      this.url = fileReader.result;
      this.addProductForm.patchValue({
        fileSource: uploadFiles
      })
    }
    
  }
}
