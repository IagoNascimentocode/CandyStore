import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindProductByIDUseCase } from "./FindProductByIDUseCase"

class FindPRoductByIDController {

    async handle (request:Request,response:Response): Promise<Response>{

        const id = request.body

        const findProductByIDUseCase = container.resolve(FindProductByIDUseCase)

        const product =  await findProductByIDUseCase.execute({id})

        return response.status(200).json(product)
    }

}
export {FindPRoductByIDController}