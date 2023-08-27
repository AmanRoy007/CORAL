import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public formData!: any;
  public addProductForm!: FormGroup;
  public isImage:boolean = false;
  public imageSrc!:string;

  constructor() {}

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      productName: new FormControl(),
      productCategory: new FormControl(),
      productPrice: new FormControl(),
      productImage: new FormControl(),
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
