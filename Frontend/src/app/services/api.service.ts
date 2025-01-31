import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/interface/Product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllProductsAPI():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.BASE_URL}`);
  }

  getProductByIdAPI(prodId:number):Observable<Product>{
    return this.http.get<Product>(`${environment.BASE_URL}/${prodId}`)
  }

  addAProductAPI(formData:FormData):Observable<Product>{
    return this.http.post<Product>(`${environment.BASE_URL}/addproduct`, formData);
  }

  getImageByProductIdAPI(prodId:number):Observable<any>{
    return this.http.get<any>(`${environment.BASE_URL}/${prodId}/image`)
  }
}
