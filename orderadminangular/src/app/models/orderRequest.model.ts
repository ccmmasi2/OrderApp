import { CustomerDTO } from "./customer.model";
import { ProductDTO } from "./product.model";

export class OrderRequest {
    Products: ProductDTO[] = []; 
    customer: CustomerDTO = new CustomerDTO(); 
    shippingAddress: string = '';
}