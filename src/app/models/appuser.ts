
export interface AppUser{
    name: string;
    email: string;
    isAdmin: string;
    id?:string;
}

export interface AddProject{
    name?: string;
    description?: string;
    url1?: any;
    url2?: any;
    url3?: any;
    id?: string;
    
}

export interface DisplayProject{
    name?: string;
    description?: string;
    url1?: any;
    url2?: any;
    url3?: any;
    id?: string;
    
}