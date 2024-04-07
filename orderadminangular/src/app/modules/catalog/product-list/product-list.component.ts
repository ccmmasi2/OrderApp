import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '@app/models/category.model';
import { ApiConnectionService } from '@app/services/api-connection.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {

  categoryOptions: CategoryDTO[] = [];

  constructor(
    public apiConnectionService: ApiConnectionService
  ) { }

  ngOnInit(): void {
    this.loadDataOptions();
  }

  loadDataOptions(): void {
    this.apiConnectionService.getCategories().subscribe((info) => {
      if(info){
        this.categoryOptions = info;
      }
      else {
        console.error('Error loading categories');
      }
    },
    (error) => {
      console.error('Error loading categories:', error);
    })
  }

  selectCategoryChange(event: any) {
     
  }

}
