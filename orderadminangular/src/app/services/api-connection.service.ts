import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDTO } from '@app/models/category.model';
import { ProductDTO } from '@app/models/product.model';
import { environment } from 'enviroment/enviroment';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiConnectionService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryDTO[]> {
    const url = `${this.baseUrl}/api/Category/GetCategories`;
    return this.http.get<CategoryDTO[]>(url).pipe(
        catchError((error: any) => {
          console.error('Error getting all Categories:', error);
          return [];
        })
    );
  }  

  getProductsByCategoryId(
    categoryId: number,
    page: number,
    sizePage: number,
    sorting: string
  ): Observable<{ totalRecords: number, currentPage: number, sizePage: number, sorting: number, data: ProductDTO[] }> {
    let url = `${this.baseUrl}/api/Product/GetProductsByCategoryId?categoryId=${categoryId}&page=${page}&sizePage=${sizePage}`;

    if (sorting) {
      url += `&sorting=${sorting}`;
    }
  
    return this.http.get<any>(url).pipe(
      map((response: any) => { 
        return {
          currentPage: response.page,
          sizePage: response.pageSize,
          sorting: response.sorting,
          totalRecords: response.totalCount,
          data: response.data
        };
      }),
      catchError((error: any) => {
        console.error('Error getting Products by Category Id:', error);
        return [];
      })
    );
  }
}
