import { DeleteUserDTO } from "../dtos/DeleteUserDTO";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IFindIdDTO } from "../dtos/IFindIdDTO";
import { IFindUserByEmailDTO } from "../dtos/IFindUserByEmailDTO";
import { IInsertShoppingCartInUserDTO } from "../dtos/IInsertShoppingCartInUserDTO";
import { User } from "../entities/User";

interface IUsersRepository{
    create({ name, email, password, birthDate, city, address}:ICreateUserDTO):Promise<User>;
    listAll(): Promise<User[]>;
    findUserByEmail({email_}:IFindUserByEmailDTO):Promise<User>;
    findUserByID({id}:IFindIdDTO):Promise<User>;
    deleteUser({id}:DeleteUserDTO):Promise<void>;
    insertShoppingCartInUser({user_id,shoppingCart_id}:IInsertShoppingCartInUserDTO):Promise<void>;
}
export {IUsersRepository}