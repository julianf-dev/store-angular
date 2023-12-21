import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  private cartService = inject(CartService)

  constructor(){
    const initProducts: Product[] = [
      {
        id: Math.random(),
        title:'Produ 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        createdAt: new Date().toString()
      },
      {
        id: Math.random(),
        title:'Produ 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        createdAt: new Date().toString()
      },
      {
        id: Math.random(),
        title:'Produ 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        createdAt: new Date().toString()
      },
      {
        id: Math.random(),
        title:'Produ 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        createdAt: new Date().toString()
      },
      {
        id: Math.random(),
        title:'Produ 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        createdAt: new Date().toString()
      },
      {
        id: Math.random(),
        title:'Produ 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        createdAt: new Date().toString()
      },
    ]
    this.products.set(initProducts)
  }


  addToCart(product: Product){
    this.cartService.addToCart(product)
  }
}
