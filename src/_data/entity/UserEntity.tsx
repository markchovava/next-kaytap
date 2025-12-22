
export interface UserInterface{
    id: string | number,
    name: string,
    phone: string,
    isAdmin: string,
    roleLevel: string, 
    email: string,
    code: string,
    password: string,
    updatedAt: string,
    createdAt: string,
}

export const UserEntity: UserInterface = {
    id: "",
    name: "",
    phone: "",
    isAdmin: "",
    roleLevel: "",
    email: "",
    code: "",
    password: "",
    updatedAt: "",
    createdAt: "",
}