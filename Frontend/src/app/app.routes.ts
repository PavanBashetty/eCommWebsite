import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CategoriesComponent } from './components/categories/categories.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'**', component:PageNotFoundComponent}
];
