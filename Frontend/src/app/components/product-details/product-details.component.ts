import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../model/interface/Product';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  prodId:number = 0;
  selectedProduct!:Product;
  isLoading:boolean = false;
  imageURL:string = '';
  productDetailSubscription!:Subscription;

  constructor(private apiService:ApiService, private route:ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe({
      next:(param)=>{
        const prodIdParam = param.get('prodId');
        this.prodId = prodIdParam ? +prodIdParam : 0;
      },
      error:(error)=>{console.error(error)}
    })

    this.getProductById();
    //this.getImageByProductId();
  }


  getProductById(){
    this.isLoading = true;
    this.apiService.getProductByIdAPI(this.prodId).subscribe({
      next:(data:Product)=>{
        this.selectedProduct = data;   
        this.isLoading = false;     
      },
      error:(error)=>{
        console.error(error);
      },
      complete:()=>{this.isLoading = false}
    })
  }

  getImageByProductId(){
    this.apiService.getImageByProductIdAPI(this.prodId).subscribe({
      next:(response:any)=>{
        this.imageURL = URL.createObjectURL(response.body);
      },
      error:(error)=>{console.error(error)}
    })
  }

  ngOnDestroy(){
    if(this.productDetailSubscription){
      this.productDetailSubscription.unsubscribe();
    }
  }

}
