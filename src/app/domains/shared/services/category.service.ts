import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient)

  getCategories(){
    return this.http.get<Category[]>(`${environment.URL_API}/categories`)
  }

  getOneCategory(id:string){
    return this.http.get<Category>(`${environment.URL_API}/categories/${id}`)
  }
}
