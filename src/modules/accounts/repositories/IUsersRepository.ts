import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IFindIdDTO } from "../dtos/IFindIdDTO";
import { User } from "../entities/User";

interface IUsersRepository{
    create({ name, email, password, birthDate, city, address}:ICreateUserDTO):Promise<User>;
    listAll(): Promise<User[]>;
    findUserByID({id}:IFindIdDTO):Promise<User>;
}
export {IUsersRepository}