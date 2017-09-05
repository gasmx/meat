import { Injectable } from '@angular/core'

import { ShoppingCartService, CartItem } from '../restaurant-detail/shopping-cart/shopping-cart'

@Injectable()
export class OrderService {
    constructor(private cartSrv: ShoppingCartService) {}

    cartItems(): CartItem[]{
        return this.cartSrv.items;
    }

    increaseQty(item: CartItem) {
        this.cartSrv.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartSrv.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartSrv.removeItem(item)
    }
}