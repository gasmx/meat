import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartSrv: ShoppingCartService) { }

  ngOnInit() {
  }

  clear() {
    return this.shoppingCartSrv.clear();
  }

  removeItem(item: any) {
    this.shoppingCartSrv.removeItem(item)
  }

  addItem(item: any) {
    this.shoppingCartSrv.addItem(item)
  }

  items() : any[] {
    return this.shoppingCartSrv.items
  }

  total(): number {
    return this.shoppingCartSrv.total()
  }

}
