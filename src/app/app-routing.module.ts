import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {path: '' , component:ProductsComponent},
  {path: 'products/:id' , component:ProductDetailsComponent},
  {path: 'cart' , component:CartComponent},
  {path: '**'   , redirectTo: '' , pathMatch:"full", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
