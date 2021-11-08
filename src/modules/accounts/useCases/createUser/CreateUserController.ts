import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";

class CreateUserController{

    async handle (request:Request,response:Response):Promise<Response>{

        const {name,email,password,city,address,birthDate} = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        await createUserUseCase.execute({name,email,password,city,address,birthDate})

        return response.status(201).send()
    
    }
}

export {CreateUserController}