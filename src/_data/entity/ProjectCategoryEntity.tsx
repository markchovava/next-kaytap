import { UserEntity, UserInterface } from "./UserEntity";

export interface ProjectCategoryInterface{
    id: string | number, 
    userId: string | number,   
    name: string,  
    desc: string,
    priority: number | string,    
    createdAt: string, 
    updatedAt: string, 
    user: UserInterface,
}

export const ProjectCategoryEntity: ProjectCategoryInterface = {
    id: "",
    userId: "",  
    name: "",   
    desc: "",   
    priority: "",  
    createdAt: "",  
    updatedAt: "",
    user: UserEntity,
}