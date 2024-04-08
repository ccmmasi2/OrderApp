import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from '@app/app.component';
import { CategoryDTO } from '@app/models/category.model';
import { ProductDTO } from '@app/models/product.model';
import { ApiConnectionService } from '@app/services/api-connection.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {

  displayedColumns: string[] = [
    'Product_Code',
    'Name',
    'Description',
    'Price',
    'Stock',
    'OrderQty',
    'Add_to_cart',
  ];

  cartItems: { product: ProductDTO, quantity: number }[] = []; // Definición de cartItems
  categoryOptions: CategoryDTO[] = [];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  categoryId: number = 0;
  length!: number;
  pageIndex: number = 0; 
  pageSizeLength: number = 10;
  sorting: string = '';
  pageSizeOptions = [10, 25, 50];

  constructor(
    public _MatPaginatorIntl: MatPaginatorIntl,
    public apiConnectionService: ApiConnectionService,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.loadDataOptions();
    this.getList(this.categoryId, this.pageIndex, this.pageSizeLength, this.sorting);
    this.initializePagination(this.pageIndex, this.pageSizeLength, this.length);
  }

  initializePagination(pageObj: number, pageSizeObj: number, lengthObj: number){
    this._MatPaginatorIntl.itemsPerPageLabel = 'Show';
    this._MatPaginatorIntl.nextPageLabel = 'Next page';
    this._MatPaginatorIntl.previousPageLabel = 'Last page';

    this._MatPaginatorIntl.getRangeLabel = (
      page: number = pageObj,
      pageSize: number = pageSizeObj,
      length: number = lengthObj
    ) => {
      if (length === 0 || pageSize === 0) {
        return '';
      } 

      const startIndex = page * pageSize;
      const endIndex = Math.min(startIndex + pageSize, length);

      let countPages = Math.ceil(length / pageSizeObj);
      const spaces = String.fromCharCode(160).repeat(30); 

      return `${startIndex + 1} - ${endIndex} of ${length} entries ${spaces} Pag ${pageObj + 1} / ${countPages}`;
    }; 
  }

  getList(categoryId: number, page: number, pageSize: number, sorting: string): void {
    this.apiConnectionService.getProductsByCategoryId(categoryId, page + 1, pageSize, sorting).subscribe((data) => {
      if (data) {
        this.dataSource = new MatTableDataSource<ProductDTO>(data.data);
        this.length = data.totalRecords;
        this.pageIndex = page;
      }
    },
    (error) => {
      const message = `Error getting data from the API "${error}"`
      this.appComponent.showAlert(message, 'error');
    });
  }

  loadDataOptions(): void {
    this.apiConnectionService.getCategories().subscribe((info) => {
      if(info){
        this.categoryOptions = info;
      }
      else {
        const message = `Error loading categories`
        this.appComponent.showAlert(message, 'error');
      }
    },
    (error) => {
      const message = `Error loading categories: "${error}"`
      this.appComponent.showAlert(message, 'error'); 
    })
  }

  selectCategoryChange(event: any) {
    this.getList(this.categoryId, this.pageIndex, this.pageSizeLength, this.sorting);
  }

  pageChanged(event: PageEvent) { 
    this.pageSizeLength = event.pageSize;
    this.getList(this.categoryId, event.pageIndex, this.pageSizeLength, this.sorting);
    this.initializePagination(event.pageIndex, this.pageSizeLength, this.length);
  }
  
  onSortChange(event: any) {
    if (event.active && event.direction) {
      this.sorting = this.columnMapping[event.active] || event.active;
      this.getList(this.categoryId, this.pageIndex, this.pageSizeLength, this.sorting);
    }
  }

  columnMapping: { [key: string]: string } = {
    'Id': 'id',
    'Name': 'name',
  };

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

  addToCart(product: ProductDTO): void {
    if (product.orderQty > 0 && product.orderQty <= product.stockQty) {
      const productToAdd = { ...product };  
      this.cartItems.push({ product: productToAdd, quantity: product.orderQty });
      console.log('added');

      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

      const message = `Product "${product.name}" - "${product.productCode}" with amoutn "${product.orderQty}" addedd to Cart`
      this.appComponent.showAlert(message, 'success'); 
    } else {
      const message = `Invalid amount`
      this.appComponent.showAlert(message, 'error'); 
    }
  }
}
