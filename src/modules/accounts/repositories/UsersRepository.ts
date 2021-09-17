import { getRepository, Repository } from "typeorm";
import { User } from "../entities/Users";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository{

    private repository:Repository<User>;

    constructor(){
        this.repository =  getRepository(User)
    }

    async create({ name, email, password, birthDate, city, address, admin }: { name: any; email: any; password: any; birthDate: any; city: any; address: any; admin: any; }): Promise<User> {
        const user = this.repository.create({ name, email, password, birthDate, city, address, admin })

        await this.repository.save(user)

        return user 
    }
    async listAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

}
export {UsersRepository}