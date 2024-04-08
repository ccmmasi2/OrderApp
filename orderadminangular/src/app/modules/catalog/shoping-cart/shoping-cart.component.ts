import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from '@app/app.component';
import { CartItem } from '@app/models/cartItem.model';
import { ProductDTO } from '@app/models/product.model';
import { ApiConnectionService } from '@app/services/api-connection.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html' 
})

export class ShopingCartComponent implements OnInit {

  displayedColumns: string[] = [
    'Product_Code',
    'Name',
    'Description',
    'Price',
    'Stock',
    'OrderQty',
  ];

  cartItems: CartItem[] = []; // Definición de cartItems
  dataSource: any;

  constructor(
    public apiConnectionService: ApiConnectionService,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.dataSource = new MatTableDataSource<CartItem>(this.cartItems);
    } 
  }    

  incrementQty(product: ProductDTO) {
    if (product.orderQty < product.stockQty) {
      product.orderQty++;
    } else {
      const message = `no stock`
      this.appComponent.showAlert(message, 'warning'); 
    }
  }
  
  decrementQty(product: ProductDTO) {
    if (product.orderQty > 0) {
      product.orderQty--;
    }
  }

  isOrderQtyExceed(element: any): boolean {
    return element.orderQty > element.stockQty;
  }
  
  isOrderQtyZero(element: any): boolean {
    return element.orderQty === 0;
  }
}
