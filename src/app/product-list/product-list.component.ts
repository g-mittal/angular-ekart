import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // name = "John Doe";
  addToCart: number = 0;

  product = {
    name: 'iPhone 15',
    price: 999,
    color: "Black",
    discount: 8.5,
    inStock: 10,
    pImage: "assets/images/iphone15.jpg"
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * (this.product.discount / 100))
  }

  incrementCartValue() {
    if(this.addToCart < this.product.inStock) {
      this.addToCart++;
    }

  }

  decrementCartValue() {
    if(this.addToCart > 0) {
      this.addToCart--;
    }
    
  }
  
  // onNameChange(event: any) {
  //   console.log(event.target.value)
  //   this.name = event.target.value;
  // }
}
