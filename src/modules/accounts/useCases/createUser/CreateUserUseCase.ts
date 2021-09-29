import { hash } from "bcryptjs"
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository
    ){}

    async execute ({name,email,password,city,address,birthDate}:ICreateUserDTO){

        const existingUser = await this.usersRepository.findUserByEmail({email_:email});

        
        if (existingUser){
            throw Error("User already exists")
        }

        const encryptedPassword = await hash(password,10)

        console.log(encryptedPassword)

        await this.usersRepository.create({name,email,password:encryptedPassword,city,address,birthDate})

    }

}
export {CreateUserUseCase}