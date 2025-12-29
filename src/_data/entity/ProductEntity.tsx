import { ProductDetailInterface } from "./ProductDetailEntity"
import { ProductImageEntity, ProductImageInterface } from "./ProductImageEntity"
import { UserEntity, UserInterface } from "./UserEntity"

export interface ProductInterface{
    id: string | number, 
    userId: string | number, 
    name: string,
    desc: string, 
    sku: string, 
    price: number | string, 
    quantity: number | string, 
    status: string, 
    updatedAt: string, 
    createdAt: string, 
    user: UserInterface,
    productImages: ProductImageInterface[]
    productDetails: ProductDetailInterface[]
}


export const ProductEntity: ProductInterface = {
    id: "",
    userId: "",
    name: "",
    status: "",
    quantity: "",
    price: "",
    sku: "",
    desc: "",
    updatedAt: "", 
    createdAt: "", 
    user: UserEntity,
    productImages: [],
    productDetails: [],
}


export const ProductStockEntity = [
    {id: 1, name: "IN-STOCK", value:"IN-STOCK"}, 
    {id: 2, name: "OUT-OF-STOCK", value:"OUT-OF-STOCK"}
]

