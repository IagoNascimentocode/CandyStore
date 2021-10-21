import { inject, injectable } from "tsyringe";
import { Store } from "../../entities/Store";
import { IStoreRepository } from "../../repositories/IStoreRepository";

@injectable()
class ListAllStoreUseCase{

    constructor(
        @inject("StoreRepository")
        private storeRepository:IStoreRepository
    ){}

    async execute():Promise<Store[]>{

        const stores = await this.storeRepository.listAllStore()

        return stores
    }
}
export {ListAllStoreUseCase}