import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListStoreAndShelvesUseCase} from "./ListStoreAndShelvesUseCase";

class ListStoreAndShelvesController {

    async handle(request:Request,response:Response):Promise<Response>{

        const store_id = request.body;

        const listStoreAndShelvesUseCase = container.resolve(ListStoreAndShelvesUseCase)

        const store = await listStoreAndShelvesUseCase.execute(store_id)

        return response.status(200).json(store)
    }
}

export {ListStoreAndShelvesController}