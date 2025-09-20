export interface ProductInterface{
    id: number,
    name: string,
    status: string,
    quantity: number,
    price: number,
    img: File | null | string,
    sku: string,
    description: string,
}