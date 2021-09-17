import { User } from "../entities/Users";

interface IUsersRepository{
    create({ name, email, password, birthDate, city, address, admin }):Promise<User>;
    listAll(): Promise<User[]>;
}
export {IUsersRepository}