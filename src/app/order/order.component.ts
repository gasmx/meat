import { Component, OnInit } from '@angular/core';

import { RadioOption } from '../shared/radio/radio-option.model'

import { OrderService } from '../order/order.service'

import { CartItem } from '../restaurant-detail/shopping-cart/shopping-cart'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];

  constructor(private orderSrv: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderSrv.cartItems()
  }

  increaseQty(item: CartItem) {
    this.orderSrv.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.orderSrv.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.orderSrv.remove(item)
  }

}
