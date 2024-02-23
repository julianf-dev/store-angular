import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  getProducts(parametros: any = null){
    const url = new URL (`${environment.URL_API}/products`)
    if(parametros.category_id){
      url.searchParams.set('categoryId', parametros.category_id)
    }
    if(parametros.limit){
      url.searchParams.set('limit', parametros.limit)
    }
    if(parametros.offset == 0 || parametros.offset > 0){
      url.searchParams.set('offset', parametros.offset)
    }
 /*    let queryString = "";
    if (parametros) {
      queryString = "?";
      if (parametros.offset == 0 || parametros.offset > 0) {
        if (queryString != "?") queryString += "&";
        queryString += "offset=" + parametros.offset
      }
      if (parametros.limit) {
          if (queryString != "?") queryString += "&";
          queryString += "limit=" + parametros.limit
      }
    } */
    return this.http.get<Product[]>(url.toString())
  }

  getOne(id:string){
    return this.http.get<Product>(`${environment.URL_API}/products/${id}`)
  }
}
