interface ICreateUserDTO {
    id?: string;
    name: string;
    email: string;
    password: string;
    admin?: boolean
    city: string;
    address: string;
    birthDate: Date;
   }
   
   export { ICreateUserDTO }