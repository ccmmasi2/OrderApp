import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderListComponent } from './order-list/order-list.component';

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
        component: ShoppingCartComponent,
      },
      {
        path: 'order-list',
        component: OrderListComponent,
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
