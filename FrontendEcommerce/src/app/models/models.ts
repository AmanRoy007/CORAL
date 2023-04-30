export interface LoginFormData{
    email:string,
    password:string,
}


export interface registerFormModel{
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    
}

export interface loginResponse{
email:string, isLogedIn:Boolean
}