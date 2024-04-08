import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '@app/app.component';
import { IdentificationTypeDTO } from '@app/models/identificationType.model';
import { ProductDTO } from '@app/models/product.model';
import { ApiConnectionService } from '@app/services/api-connection.service';

@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
})

export class GenerateOrderComponent implements OnInit {
  
  cartItems: ProductDTO[] = []; 
  totalQty: number = 0;
  totalSum: number = 0;

  identificationTypeId: number = 0;
  identificationTypeOptions: IdentificationTypeDTO[] = [];

  identificationType: string = '';
  identification: string = '';
  name: string = '';
  lastName: string = '';
  birthDay: string = '';
  email: string = '';
  phoneNumber: string = '';
  shippingAddress: string = '';
  
  constructor(
    public apiConnectionService: ApiConnectionService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.totalQty = data.totalQty;
    this.totalSum = data.totalSum;
    this.cartItems = data.cartItems;
  }

  ngOnInit(): void {
    this.loadDataOptions(); 
  }

  loadDataOptions(): void {
    this.apiConnectionService.getIdentificationTypes().subscribe((info) => {
      if(info){
        this.identificationTypeOptions = info;
      }
      else {
        const message = `Error loading identification types`
      }
    },
    (error) => {
      const message = `Error loading identification types: "${error}"`
    })
  }

  submitForm(): void {
  }
}
