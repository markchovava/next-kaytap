export interface AuthInterface{
    id: string | number,
    name: string,
    phone: string,
    isAdmin: string ,
    roleLevel: string | number,
    email: string,
    code: string,
    password: string,
    updatedAt: string,
    createdAt: string,
}


export const AuthEntity: AuthInterface = {
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