import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"
import { inject, injectable } from "tsyringe";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IResponse{
    user:{
        name: string;
        email: string;
    },
    token: string;
}
@injectable()
class AuthenticateUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersrepository:IUsersRepository
    ){}

    async execute({email,password}:IAuthenticateUserDTO):Promise<IResponse>{
        
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

        const tokenReturn:IResponse = {
            token,
            user:{
                name:user.name,
                email:user.email
            }
        }    

        return tokenReturn
    }

}

export{AuthenticateUserUseCase}