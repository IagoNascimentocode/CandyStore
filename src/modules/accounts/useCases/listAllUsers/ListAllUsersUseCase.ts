import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class ListAllUsersUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository
    ){}

    async execute (){

        const allUsers = await this.usersRepository.listAll()

        return allUsers

    }

}

export {ListAllUsersUseCase}