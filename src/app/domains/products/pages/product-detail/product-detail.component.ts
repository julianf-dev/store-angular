import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product = signal<Product | null>(null)
  cover = signal('')
  //Los parametros ahora se reciben com input
  @Input() id?:string
  private productService = inject(ProductService)
  private cartService = inject(CartService)

  ngOnInit(){
    if(this.id){
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product)
          if(product.images.length > 0){
            this.cover.set(product.images[0])
          }
          else{
            this.cover.set('https://www.whitmorerarebooks.com/pictures/medium/2465.jpg')
          }
        }
      }
      )
    }
  }

  changeCover(newImg:string){
      this.cover.set(newImg)
  }

  addToCart(){
    const product = this.product()
    if(product){
      this.cartService.addToCart(product)
    }
  }
}
