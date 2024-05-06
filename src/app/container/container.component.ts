import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;
  // OR
  // @ViewChild('productListComponentRefVar') productListComponent: ProductListComponent;

  setSearchText(value: string) {
    this.searchText = value;
    // console.log(this.searchText);
  }

  // listOfString: string[] = ['Jim', 'Kane', 'Shaun']

  // name = "John Doe";
  // addToCart: number = 0;

  // product = {
  //   name: 'iPhone 15',
  //   price: 999,
  //   color: "Black",
  //   discount: 8.5,
  //   inStock: 10,
  //   pImage: "assets/images/iphone15.jpg"
  // }

  // getDiscountedPrice() {
  //   return this.product.price - (this.product.price * (this.product.discount / 100))
  // }

  // incrementCartValue() {
  //   if(this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }

  // }

  // decrementCartValue() {
  //   if(this.addToCart > 0) {
  //     this.addToCart--;
  //   }
    
  // }
  
  // onNameChange(event: any) {
  //   console.log(event.target.value)
  //   this.name = event.target.value;
  // }
}
