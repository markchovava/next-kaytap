interface CategoryInterface{
    id: string | number, 
    userId: string | number,   
    name: string,  
    desc: string,   
    img: string | File, 
    priority: number | string,    
    createdAt: string, 
    updatedAt: string, 
}

export const CategoryEntity: CategoryInterface = {
    id: "",
    userId: "",  
    name: "", 
    desc: "",  
    img: "",  
    priority: "",  
    createdAt: "",  
    updatedAt: "",
}