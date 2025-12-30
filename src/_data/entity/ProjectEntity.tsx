import { ProjectCategoryEntity, ProjectCategoryInterface } from "./ProjectCategoryEntity";
import { ProjectImageEntity, ProjectImageInterface } from "./ProjectImageEntity";
import { UserEntity, UserInterface } from "./UserEntity";

export interface ProjectInterface{
    id: string | number
    userId: string | number
    projectCategoryId: string | number
    name: string
    desc: string
    address: string
    status: string 
    priority: string | number
    updatedAt: string
    createdAt: string
    projectImages: ProjectImageInterface[]
    user: UserInterface
    projectCategory: ProjectCategoryInterface
}

export const ProjectEntity: ProjectInterface = {
    id: "",
    userId: "",
    projectCategoryId: "",
    name: "",
    desc: "",
    status: "", 
    address: "", 
    priority: "", 
    updatedAt: "",
    createdAt: "",
    projectImages: [],
    user: UserEntity,
    projectCategory: ProjectCategoryEntity,
}




