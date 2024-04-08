import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';
import { NumericInputDirective } from '@app/rules/numeric-input.directive';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    NumericInputDirective,
    ShoppingCartComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MaterialModule,
    FormsModule
  ]
})

export class CatalogModule { }
