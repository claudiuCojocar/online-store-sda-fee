import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./model/product";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CATEGORY_API = "http://localhost:8081/categories"

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.CATEGORY_API);
  }

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.CATEGORY_API, category);
  }
}
