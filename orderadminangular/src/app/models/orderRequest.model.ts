import { CustomerDTO } from "./customer.model";
import { ProductDTO } from "./product.model";

export class OrderRequest {
    lProducts: ProductDTO[] = []; 
    customer: CustomerDTO = new CustomerDTO(); 
    shippingAddress: string = '';
}