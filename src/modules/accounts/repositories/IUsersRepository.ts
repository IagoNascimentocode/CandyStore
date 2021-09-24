import { DeleteUserDTO } from "../dtos/DeleteUserDTO";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IFindIdDTO } from "../dtos/IFindIdDTO";
import { User } from "../entities/User";

interface IUsersRepository{
    create({ name, email, password, birthDate, city, address}:ICreateUserDTO):Promise<User>;
    listAll(): Promise<User[]>;
    findUserByID({id}:IFindIdDTO):Promise<User>;
    deleteUser({id}:DeleteUserDTO):Promise<void>;
}
export {IUsersRepository}