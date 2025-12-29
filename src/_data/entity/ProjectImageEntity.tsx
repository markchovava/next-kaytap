export interface ProjectImageInterface{
    id: string | number,
    userId: string | number,
    projectId: string | number,
    img: string, 
    imgFile: File | null,
    priority: string | number,
    updatedAt: string, 
    createdAt: string, 
}

export const ProjectImageEntity: ProjectImageInterface = {
    id: "",
    userId: "",
    projectId: "", 
    img: "", 
    imgFile: null,
    priority: "", 
    updatedAt: "", 
    createdAt: "",
}