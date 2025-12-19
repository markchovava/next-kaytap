export interface ContactInterface{
    id: number | string,
    userId: number | string,
    name: string,
    email: string,
    message: string, 
    status: string, 
    updatedAt: string, 
    createdAt: string, 
}

export const ContactEntity: ContactInterface = {
    id: "",
    userId: "",
    name: "",
    email: "",
    message: "",
    status: "",
    updatedAt: "",
    createdAt: "",
}