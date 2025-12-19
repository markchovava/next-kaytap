export interface ServiceInterface{
    id: string | number,
    userId: string | number,
    name: string,
    img: string | File,
    desc: string,
    priority: string | number,
    updatedAt: string,
    createdAt: string,
}

export const ServiceEntity = {
    id: "",
    userId: "",
    name: "",
    img: "",
    desc: "",
    priority: "",
    updatedAt: "",
    createdAt: "",
}