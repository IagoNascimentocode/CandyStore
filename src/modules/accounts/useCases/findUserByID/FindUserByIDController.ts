import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByIDUserCase } from "./FindUserByIDUserCase";

class FindUserByIdController{

    async handle(request:Request,response:Response):Promise<Response>{
        
        const {id} = request.params

        const findUserByIDUseCase = container.resolve(FindUserByIDUserCase)

        const user = await findUserByIDUseCase.execute({id})

        return response.status(200).json(user)
    }
}

export  {FindUserByIdController}