import { CategoryEntity, CategoryInterface } from "./CategoryEntity"
import { ProductEntity, ProductInterface } from "./ProductEntity"
import { UserEntity, UserInterface } from "./UserEntity"

export interface ProductCategoryInterface{
    id: string | number
    userId: string | number
    productId: string | number
    categoryId: string | number
    createdAt: string
    updatedAt: string
    category: CategoryInterface
    product: ProductInterface
    user: UserInterface
}


export const ProductCategoryEntity : ProductCategoryInterface = {
    id: "",
    userId: "",
    productId: "",
    categoryId: "",
    createdAt: "",
    updatedAt: "",
    category: CategoryEntity,
    product: ProductEntity,
    user: UserEntity
}