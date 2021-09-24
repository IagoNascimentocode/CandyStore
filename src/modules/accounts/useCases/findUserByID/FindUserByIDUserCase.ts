import { inject, injectable } from "tsyringe";
import { IFindIdDTO } from "../../dtos/IFindIdDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindUserByIDUserCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository
    ){}

        async execute({id}:IFindIdDTO):Promise<User>{   
           
            const user = await this.usersRepository.findUserByID({id})

           return user
        }

}
export {FindUserByIDUserCase}