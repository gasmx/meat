import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RadioOption } from '../shared/radio/radio-option.model'
import { OrderService } from '../order/order.service'
import { CartItem } from '../restaurant-detail/shopping-cart/shopping-cart'
import { Order, OrderItem } from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];

  constructor(
    private orderSrv: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderSrv.itemsValue()
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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))

    this.orderSrv
      .checkOrder(order)
      .subscribe((orderId: string) => {
        console.log('Compra concluída', orderId)
        this.router.navigate(['/order-summary'])
        this.orderSrv.clear()
      })
  }
}
