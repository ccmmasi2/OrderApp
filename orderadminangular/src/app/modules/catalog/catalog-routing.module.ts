import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

const routes: Routes = [
  {
    path: 'Order',
    children: [
      {
        path: 'catalog',
        component: ProductListComponent,
      },
      {
        path: 'shopping-cart',
        component: ShopingCartComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [], 
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CatalogRoutingModule { }
