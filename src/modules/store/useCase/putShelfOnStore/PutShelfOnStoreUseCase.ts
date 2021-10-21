import { inject, injectable } from "tsyringe";
import { IShelvesRepository } from "../../../shelf/repositories/IShelvesRepository";
import { IPutShelfOnStoreDTO } from "../../dtos/IPutShelfOnStoreDTO";
import { IStoreRepository } from "../../repositories/IStoreRepository";

@injectable()
class PutShelfOnStoreUseCase{

    constructor(
        @inject("StoreRepository")
        private storeRepository:IStoreRepository,

        @inject("ShelvesRepository")
        private shelvesRepository:IShelvesRepository
    ){}

    async execute({store_id,shelf_id}:IPutShelfOnStoreDTO):Promise<void>{


        await this.shelvesRepository.putStoreOnShelf({store_id,shelf_id})

        await this.storeRepository.putShelfOnStore({store_id,shelf_id})

    }
}

export {PutShelfOnStoreUseCase}