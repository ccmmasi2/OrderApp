import { ProductDTO } from "./product.model"

export class CartItem {
    product: ProductDTO = new ProductDTO();
    quantity: number = 0;
}