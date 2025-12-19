export interface CartInterface{
    id: string | number,
    cartRef: string,
    quantity: string | number,
    total: string | number,
    createdAt: string,
    updatedAt: string,
}


export const CartEntity: CartInterface = {
    id: "",
    cartRef: "",
    quantity: "",
    total: "",
    createdAt: "",
    updatedAt: "",
}