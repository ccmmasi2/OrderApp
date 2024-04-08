import { Component, OnInit } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { IdentificationTypeDTO } from '@app/models/identificationType.model';
import { ApiConnectionService } from '@app/services/api-connection.service';

@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
})

export class GenerateOrderComponent implements OnInit {
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
  ) {
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
