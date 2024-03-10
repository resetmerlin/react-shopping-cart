/*
  /products
*/

export interface IProduct {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

export interface GetProdutResponse extends IProduct {}

export interface PostProductRequest {
  product: Omit<IProduct, 'id'>;
}

/*
    /carts
  */

export interface ICart {
  id: number;
  product: IProduct;
}

export interface GetCartResponse extends ICart {}

export interface PostCartRequest {
  product: IProduct;
}

/*
    /orders
  */

export interface IOrderDetail extends IProduct {
  quantity: number;
}

export interface IOrder {
  id: number;
  orderDetails: IOrderDetail[];
}

export interface GetOrderResponse extends IOrder {}

export interface PostOrderResponse {
  orderDetails: IOrderDetail[];
}
