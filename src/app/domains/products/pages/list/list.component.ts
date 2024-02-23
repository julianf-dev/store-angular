import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { Category } from '@shared/models/category.model';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  categories = signal<Category[]>([])
  private cartService = inject(CartService)
  private productService = inject(ProductService)
  private categoryServiecs = inject(CategoryService)

  @Input() category_id?:string

  parametros = {
    offset: 0,
    limit: 10,
    category_id: ''
  }

  ngOnInit(){
    this.getCategories()
  }

  ngOnChanges(changes: SimpleChanges){
    const category_id = changes['category_id']
    if(category_id){
      this.parametros.category_id = this.category_id || '';
    }
    this.getProducts(this.parametros)
  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
  }

  private getProducts(parametros?:any){
    this.productService.getProducts(this.parametros).subscribe({
      next:(products:any) =>{
        this.products.set(products)
      },
      error:(error) =>{
        console.log(error);
      }
    })
  }

  private getCategories(){
    this.categoryServiecs.getCategories().subscribe({
      next:(categories:any) =>{
        this.categories.set(categories)
      },
      error:(error) =>{
        console.log(error);
      }
    })
  }

}


