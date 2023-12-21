import { Component, Input, SimpleChange, SimpleChanges, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  /* @Input({required:true}) cart: Product[] = [] */

  hideSideMenu = signal(true)

  private cartService = inject(CartService)

  cart = this.cartService.cartItems
  total = this.cartService.total

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }

  removeProduct(product:Product){
    this.cartService.removeOfCart(product)
  }

/*   ngOnChanges(changes:SimpleChanges){
    const cart = changes['cart'];
    if(cart){
      this.total.set(this.getTotalPrice())
    }
  } */

}
