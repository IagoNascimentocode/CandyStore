import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IFindIdDTO } from "../dtos/IFindIdDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository{

    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User)
    }
    
    async create({ name, email, password, birthDate, city, address}:ICreateUserDTO): Promise<User> {
        
        const user = this.repository.create({ name, email, password, birthDate, city, address})

        await this.repository.save(user)

        return user 
    }
    
    async listAll(): Promise<User[]> {
        const all = this.repository.find()
        
        return all
    }

    async findUserByID({ id }: IFindIdDTO): Promise<User> {
        const user = await this.repository.findOne(id)

        return user
    }
    
}
export {UsersRepository}