import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../model/interface/Product';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

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

}
