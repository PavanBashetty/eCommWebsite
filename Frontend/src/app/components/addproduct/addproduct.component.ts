import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addproduct',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {

  addProductForm:FormGroup = new FormGroup({});
  image: File | null = null;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder){}

  ngOnInit(){
    this.addProductForm = this.formBuilder.group({
      prodName:['',Validators.required],
      brand:['',Validators.required],
      description:['',Validators.required],
      price:[null,Validators.required],
      category:['',Validators.required],
      quantity:[null,Validators.required],
      releaseDate:['',Validators.required],
      available: [false,Validators.required]
    })
  }

  onSubmit(){

    const formData = new FormData();
    if(this.image){
      formData.append('imageFile',this.image);
    }
    formData.append('product', new Blob([JSON.stringify(this.addProductForm.value)], {type: 'application/json'}));

    this.apiService.addAProduct(formData).subscribe({
      next:()=>{
        alert("Product added successfully!");
        this.onCancel();
      },
      error:(error)=>{
        console.error("Error adding product: " + error);
        this.onCancel();
      }
    })
  }

  handleImageChange(event:Event):void{
    const target = event.target as HTMLInputElement;
    this.image = target.files ? target.files[0] : null;
  }

  onCancel(){
    this.addProductForm.reset();
    this.image = null;
  }
}
