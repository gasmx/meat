import { Injectable } from '@angular/core'
import { ShoppingCartService, CartItem } from '../restaurant-detail/shopping-cart/shopping-cart'
import { Order, OrderItem } from './order.model'
import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { MEAT_API } from '../app.api'


@Injectable()
export class OrderService {
    constructor(
        private cartSrv: ShoppingCartService,
        private http: Http
    ) {}

    cartItems(): CartItem[]{
        return this.cartSrv.items;
    }

    itemsValue(): number {
        return this.cartSrv.total()
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

    clear() {
        this.cartSrv.clear()
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http
            .post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(order => order.id)
    }
}