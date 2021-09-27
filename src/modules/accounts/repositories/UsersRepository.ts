import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IFindIdDTO } from "../dtos/IFindIdDTO";
import { IFindUserByEmailDTO } from "../dtos/IFindUserByEmailDTO";
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
    
    async findUserByEmail({email_}:IFindUserByEmailDTO): Promise<User> {

        const user = await this.repository.findOne({email:email_})
       
        return user
    }

    async findUserByID({ id }: IFindIdDTO): Promise<User> {
        const user = await this.repository.findOne(id)
        
        return user
    }
    
    async deleteUser({id}:IFindIdDTO):Promise<void>{

        await this.repository.delete(id)
    }
}
export {UsersRepository}