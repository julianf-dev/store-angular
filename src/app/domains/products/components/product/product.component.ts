import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) image:string = ""
  @Input({required: true}) price:number = 0
  @Input({required: true}) title:string = ""

  @Output() addtoCart = new EventEmitter();

  addToCartHandler(){
    console.log('Click from the child');
    this.addtoCart.emit('Hi this is a messageo from of son' + this.title)
  }
}
