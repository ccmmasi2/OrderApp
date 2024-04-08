export class OrderInformation {
    id: number = 0;
    orderDate!: Date;
    shippingAddress: string = '';
    completeName: string = '';
    identificationType: string = '';
    identification: number = 0;
    email: string = '';
    phoneNumber: string = '';
    totalQty: number = 0;
    totalPrice: number = 0;
}