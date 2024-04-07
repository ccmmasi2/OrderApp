import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDTO } from '@app/models/category.model';
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
}
