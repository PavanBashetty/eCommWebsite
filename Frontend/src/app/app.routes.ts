import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'productDetail/:prodId',component:ProductDetailsComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'**', component:PageNotFoundComponent}
];
