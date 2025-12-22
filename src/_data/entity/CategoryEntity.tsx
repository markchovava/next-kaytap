import { UserEntity, UserInterface } from "./UserEntity";

export interface CategoryInterface{
    id: string | number, 
    userId: string | number,   
    name: string,  
    desc: string,   
    img: string, 
    imgFile: null | File, 
    priority: number | string,    
    createdAt: string, 
    updatedAt: string, 
    user: UserInterface,
}

export const CategoryEntity: CategoryInterface = {
    id: "",
    userId: "",  
    name: "", 
    desc: "",  
    img: "",  
    imgFile: null,  
    priority: "",  
    createdAt: "",  
    updatedAt: "",
    user: UserEntity,
}