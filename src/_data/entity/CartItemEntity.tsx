export interface CartItemInterface{
    id: string | number,
    cartId: string | number,
    productId: string | number,
    productName: string,
    quantity: number | string,
    price: number | string,
    total: number | string,
    createdAt: string,
    updatedAt: string,
}

export const CartItemEntity: CartItemInterface = {
    id: "",
    cartId: "",
    productId: "",
    productName: "",
    quantity: "",
    price: "",
    total: "",
    createdAt: "",
    updatedAt: "",
}