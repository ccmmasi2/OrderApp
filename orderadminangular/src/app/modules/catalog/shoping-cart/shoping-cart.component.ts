import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from '@app/app.component';
import { ProductDTO } from '@app/models/product.model';
import { GenerateOrderComponent } from '@app/modules/shared/generate-order/generate-order.component';
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
    'Totals',
    'Delete'
  ];

  cartItems: ProductDTO[] = []; // Definición de cartItems
  dataSource: any;

  constructor(
    public apiConnectionService: ApiConnectionService,
    private appComponent: AppComponent,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.dataSource = new MatTableDataSource<ProductDTO>(this.cartItems);
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

  calculateTotal(element: ProductDTO): number {
    return element.price * element.orderQty;
  } 
  
  getTotalQty(): number {
    let totalQty = 0;
    for (const item of this.cartItems) {
      totalQty += item.orderQty;
    }
    return totalQty;
  } 
  
  getTotalSum(): number {
    let totalSum = 0;
    for (const item of this.cartItems) {
      totalSum += item.price * item.orderQty;
    }
    return totalSum;
  } 

  removeItem(product: ProductDTO): void {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const confirmation = confirm(`Are you sure you want to remove "${product.name}" from the cart?`);
      if (confirmation) {
        this.cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.dataSource = new MatTableDataSource<ProductDTO>(this.cartItems);
      }
    }
  }
  
  createOrder() {
    const dialogRef = this.dialog.open(GenerateOrderComponent, {
      width: '600px',  
      height: '500px'  
    });
  
    dialogRef.afterClosed().subscribe(result => {
    });
    // this.apiConnectionService.createOrder(this.cartItems).subscribe(
    //   response => {
    //   },
    //   error => {
    //     console.error('Error creating order:', error);
    //   }
    // );
  }
}
