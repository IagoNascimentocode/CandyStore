import { Request, Response } from "express"
import { container } from "tsyringe";
import { PutShelfOnStoreUseCase } from "./PutShelfOnStoreUseCase";

class PutshelfOnStoreController{

    async handle(request:Request,response:Response):Promise<Response>{
        const {store_id,shelf_id} = request.body;

        const putShelfOnStoreUseCase = container.resolve(PutShelfOnStoreUseCase)
    
        await putShelfOnStoreUseCase.execute({store_id,shelf_id})

        return response.status(200).send("Success")
    }
}

export {PutshelfOnStoreController}