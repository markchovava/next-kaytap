export interface ProductImageInterface{
    id: string | number,
    userId: string | number,
    productId: string | number,  
    img: string,  
    priority: string | number,  
    updatedAt: string,  
    createdAt: string,
}

export const ProductImageEntity: ProductImageInterface = {
    id: "",  
    userId: "",  
    productId: "",  
    img: "",  
    priority: "", 
    updatedAt: "",  
    createdAt: "",  
}