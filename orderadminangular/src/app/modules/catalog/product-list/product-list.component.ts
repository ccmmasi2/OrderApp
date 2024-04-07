import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryDTO } from '@app/models/category.model';
import { ProductDTO } from '@app/models/product.model';
import { ApiConnectionService } from '@app/services/api-connection.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {

  displayedColumns: string[] = [
    'Name',
    'Product_Code',
    'Price',
  ];

  categoryOptions: CategoryDTO[] = [];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  categoryId: number = 0;
  lenght!: number;
  pageIndex: number = 0; 
  pageSizeLength: number = 10;
  sorting: string = '';

  constructor(
    public _MatPaginatorIntl: MatPaginatorIntl,
    public apiConnectionService: ApiConnectionService
  ) { }

  ngOnInit(): void {
    this.loadDataOptions();
    this.getList(this.categoryId, this.pageIndex, this.pageSizeLength, this.sorting);
    this.initializePagination(this.pageIndex, this.pageSizeLength, this.lenght)
  }

  initializePagination(pageObj: number, pageSizeObj: number, lengthObj: number){
    this._MatPaginatorIntl.itemsPerPageLabel = 'Mostrar';
    this._MatPaginatorIntl.nextPageLabel = 'Siguiente página';
    this._MatPaginatorIntl.previousPageLabel = 'Anterior página';

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
        this.lenght = data.totalRecords;
        this.pageIndex = page;
      }
    },
    (error) => {
      console.error('Error al obtener datos desde la API:', error);
    });
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
    this.getList(this.categoryId, this.pageIndex, this.pageSizeLength, this.sorting);
  }

  pageChanged(event: PageEvent) { 
    this.pageSizeLength = event.pageSize;
    this.getList(this.categoryId, event.pageIndex, this.pageSizeLength, this.sorting);
    this.initializePagination(event.pageIndex, this.pageSizeLength, this.lenght);
  }
  
  onSortChange(event: any) {
    if (event.active && event.direction) {
      this.sorting = this.columnMapping[event.active] || event.active;
      this.getList(this.categoryId, this.pageIndex, this.pageSizeLength, this.sorting);
    }
  }

  columnMapping: { [key: string]: string } = {
    'Id': 'id',
    'name': 'name',
  };
}
