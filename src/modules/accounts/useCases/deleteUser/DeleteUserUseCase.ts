import { inject, injectable } from "tsyringe";
import { DeleteUserDTO } from "../../dtos/DeleteUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersrepository:IUsersRepository
    ){}

    async execute ({id}:DeleteUserDTO):Promise<void>{
        
        const user = await this.usersrepository.findUserByID({id})

        if(!user){
            throw Error("User is not exists")
        }

        await this.usersrepository.deleteUser({id})

    }
}

export {DeleteUserUseCase}