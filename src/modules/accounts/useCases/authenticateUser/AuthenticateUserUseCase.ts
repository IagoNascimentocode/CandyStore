import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"
import { inject, injectable } from "tsyringe";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class AuthenticateUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersrepository:IUsersRepository
    ){}

    async execute({email,password}:IAuthenticateUserDTO){
        
        const user =  await this.usersrepository.findUserByEmail({email_:email})

        if (!user) {
            throw Error("Email or Password incorrect")
        }
        
        const passwordMatch = await compare(password,user.password)

        if (!passwordMatch){
            throw new Error("Email or Password incorrect")
        }

        const token = sign(
            {email:user.email},
            "shhh",
            {
                subject:user.id,
                expiresIn:"1d"
            }
        )

        return token
    }

}

export{AuthenticateUserUseCase}