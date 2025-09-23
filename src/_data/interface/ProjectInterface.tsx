export interface ProjectInterface {
    id: number,
    name: string,
    status: string,
    location: string,
    description: string,
    category: string | number,
    images?: ProjectImageInterface[],
}


export interface ProjectImageInterface {
    id: number,
    image: string,
    imageFile: File | null,
    projectId: number,
}