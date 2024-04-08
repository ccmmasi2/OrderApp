export class OrderInformation {
    id: number = 0;
    orderDate!: Date;
    identificationType: string = '';
    identification: number = 0;
    completeName: string = '';
    email: string = '';
    phoneNumber: string = '';
    shippingAddress: string = '';
    totalQty: number = 0;
    totalPrice: number = 0;
} 