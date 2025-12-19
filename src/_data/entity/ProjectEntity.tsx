export interface ProjectInterface{
    id: string | number,
    userId: string | number,
    name: string, 
    desc: string, 
    status: string, 
    priority: string | number, 
    updatedAt: string, 
    createdAt: string, 
}

export const ProjectEntity: ProjectInterface = {
    id: "",
    userId: "",
    name: "",
    desc: "",
    status: "", 
    priority: "", 
    updatedAt: "",
    createdAt: "",
}




