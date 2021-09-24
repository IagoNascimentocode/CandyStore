import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository{
    create({ name, email, password, birthDate, city, address}:ICreateUserDTO):Promise<User>;
    listAll(): Promise<User[]>;
}
export {IUsersRepository}