import { inject, injectable } from "tsyringe";
import { IFindStoreByID } from "../../dtos/IFindStoreByID";
import { Store } from "../../entities/Store";
import { IStoreRepository } from "../../repositories/IStoreRepository";

@injectable()
class ListStoreAndShelvesUseCase{

    constructor(
        @inject("StoreRepository")
        private storeRepository:IStoreRepository
    ){}

    async execute({store_id}:IFindStoreByID):Promise<Store[]>{

        const store = await this.storeRepository.listStoreAndShelves({store_id})

        return store
    }
}

export {ListStoreAndShelvesUseCase}