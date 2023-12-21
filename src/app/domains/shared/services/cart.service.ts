import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<Product[]>([])
  total = computed(() => {
    const cart = this.cartItems()
    return cart.reduce((acomu, product) => acomu + product.price, 0)
  })

  constructor() { }


  addToCart(product: Product): void{
    this.cartItems.update(state => [...state, product])
  }

  removeOfCart(product:Product){
    this.cartItems.update((items) => items.filter(item => item.id != product.id) )
  }

  updateInCart(product:Product){
 /*    this.cartItemms.update((items) => items.map(item => item.id === product.id ) */
  }
}
