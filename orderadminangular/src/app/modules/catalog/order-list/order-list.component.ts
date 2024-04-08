import { Component, OnInit } from '@angular/core';
import { AlertService } from '@app/services/alert-service.service';
import { ApiConnectionService } from '@app/services/api-connection.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})

export class OrderListComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'orderDate',
    'identificationType',
    'identification',
    'completeName',
    'email',
    'phoneNumber',
    'shippingAddress',
    'totalQty',
    'totalPrice',
  ];

  dataSource: any;

  constructor(
    public apiConnectionService: ApiConnectionService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getList();
  }
 
  getList(): void {
    this.apiConnectionService.getOrdersInformation().subscribe((data) => {
      if (data) {
        this.dataSource = data;
      }
    },
    (error) => {
      const message = `Error getting data from the API "${error}"`
      this.alertService.showAlert(message, 'error'); 
    });
  }
}
