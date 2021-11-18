import { hash } from "bcryptjs"
import { response } from "express";
import { inject, injectable } from "tsyringe";
import { IShoppingCartRepository } from "../../../shoppingCart/repositories/IShoppingCartRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository,
        @inject("ShoppingCartRepository")
        private shoppingCartRepository:IShoppingCartRepository
    ){}

    async execute ({name,email,password,city,address,birthDate}:ICreateUserDTO){

        const existingUser = await this.usersRepository.findUserByEmail({email_:email})

        if (existingUser){
            throw Error("User already exists")
        }

        const encryptedPassword = await hash(password,10)

        const user = await this.usersRepository.create({name,email,password:encryptedPassword,city,address,birthDate})
        
        
        const shoppingCart = await this.shoppingCartRepository.create({user_id:user.id})

        await this.usersRepository.insertShoppingCartInUser({user_id:user.id,shoppingCart_id:shoppingCart.id})

    }

}
export {CreateUserUseCase}