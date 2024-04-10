import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDTO } from '@app/models/product.model';
import { GenerateOrderComponent } from '@app/modules/shared/generate-order/generate-order.component';
import { AlertService } from '@app/services/alert-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html' 
})

export class ShoppingCartComponent implements OnInit {

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

  cartItems: ProductDTO[] = []; 
  dataSource: any;

  constructor(
    private dialog: MatDialog,
    private alertService: AlertService
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
      this.alertService.showAlert(message, 'warning'); 
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
        const message = `Item removed`
        this.alertService.showAlert(message, 'success'); 
      }
    }
  }
  
  createOrder() {
    const updatedCartItems: ProductDTO[] = [];
    for (const item of this.dataSource.filteredData) {
      updatedCartItems.push({ ...item });
    }

    this.cartItems = updatedCartItems;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

    const dialogRef = this.dialog.open(GenerateOrderComponent, {
      width: '600px',  
      height: '500px', 
      data: {
        totalQty: this.getTotalQty(),
        totalSum: this.getTotalSum(),
        cartItems: updatedCartItems
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
    }); 
  }
}
