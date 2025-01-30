import { Component } from '@angular/core';
import { Product } from '../../model/interface/Product';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allProducts: Product[] = [];
  failedToLoad:boolean = false;

  constructor(private apiService:ApiService){}

  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts(){
    this.apiService.getAllProducts().subscribe({
      next:(data:Product[])=>{
        this.allProducts = data;
        this.failedToLoad = false;
      },
      error:(error)=>{
        this.failedToLoad = true;
        console.error(error)
      }
    })
  }
}
