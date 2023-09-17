import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public formData!: any;
  public addProductForm!: UntypedFormGroup;
  public isImage:boolean = false;
  public imageSrc!:string;

  constructor() {}

  ngOnInit(): void {
    this.addProductForm = new UntypedFormGroup({
      productName: new UntypedFormControl(),
      productCategory: new UntypedFormControl(),
      productPrice: new UntypedFormControl(),
      productImage: new UntypedFormControl(),
    });
  }

  getImageData(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length) {
      const imageFile = fileList[0];
      const fs = new FileReader();

      fs.onload = (e:any)=>{
        this.imageSrc = e.target.result;
        this.isImage = true;
      }

      fs.readAsDataURL(imageFile);
    }
  }
}
