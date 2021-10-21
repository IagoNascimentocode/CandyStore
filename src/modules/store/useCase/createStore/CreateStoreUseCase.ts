import { inject, injectable } from "tsyringe";
import { ICreateStoreDTO } from "../../dtos/ICreateStoreDTO";
import { Store } from "../../entities/Store";
import { IStoreRepository } from "../../repositories/IStoreRepository";

@injectable()
class CreateStoreUseCase{
    
    constructor(
        @inject("StoreRepository")
        private storeRepository:IStoreRepository
    ){}

        async execute({name,category}:ICreateStoreDTO):Promise<Store>{

            const store = await this.storeRepository.create({name,category})

            return store
        }
}

export {CreateStoreUseCase}