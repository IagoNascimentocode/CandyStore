import { getRepository, QueryBuilder, Repository } from "typeorm";
import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IFindStoreByID } from "../dtos/IFindStoreByID";
import { Store } from "../entities/Store";
import { IStoreRepository } from "./IStoreRepository";

class StoreRepository implements IStoreRepository {

    private repository:Repository<Store>

    constructor(){
        this.repository = getRepository(Store)
    }

    async create({ name, category, shelf_id }: ICreateStoreDTO): Promise<Store> {
        const store = this.repository.create({name,category,shelf_id})
        
        await this.repository.save(store)
        
        return store
    }

    async listAllStore(): Promise<Store[]> {
        const stores = await this.repository.find()

        return stores
    }

    async listStoreAndShelves({ store_id }: IFindStoreByID): Promise<Store[]> {
        const store = await this.repository.find({
            where:{store_id},
            relations:["shelf"]
        })

        return store
    }

}
export {StoreRepository}