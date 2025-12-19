export interface ProductDetailInterface{
    id: string | number,
    userId: string | number, 
    productId: string | number, 
    name: string, 
    value: string, 
    updatedAt: string, 
    createdAt: string  
}

export const ProductDetailEntity: ProductDetailInterface = {
    id: "",
    userId: "", 
    productId: "", 
    name: "",
    value: "", 
    updatedAt: "", 
    createdAt: "",
}