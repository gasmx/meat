class Order {
    constructor(
        public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: Array<OrderItem> = []
    ) {}
}

class OrderItem {
    constructor(public quatity: number, public menuId: string) {}
}

export { Order, OrderItem }