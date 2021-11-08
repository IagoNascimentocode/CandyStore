import { getRepository, QueryBuilder, Repository } from "typeorm";
import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IFindStoreByID } from "../dtos/IFindStoreByID";
import { IPutShelfOnStoreDTO } from "../dtos/IPutShelfOnStoreDTO";
import { Store } from "../entities/Store";
import { IStoreRepository } from "./IStoreRepository";

class StoreRepository implements IStoreRepository {

    private repository:Repository<Store>

    constructor(){
        this.repository = getRepository(Store)
    }

    async create({ name, category }: ICreateStoreDTO): Promise<Store> {
        const store = this.repository.create({name,category})
        
        await this.repository.save(store)
        
        return store
    }

    async listAllStore(): Promise<Store[]> {
        const stores = await this.repository.find()

        return stores
    }

    async listStoreAndShelves({ store_id }: IFindStoreByID): Promise<Store[]> {

        const storeAndShelf = await this.repository.find({
            where:{id:store_id},
            relations:["shelf"]
        })

        return storeAndShelf
    }

    async putShelfOnStore({ store_id, shelf_id }: IPutShelfOnStoreDTO): Promise<void> {
        
        await this.repository.createQueryBuilder()
        .update()
        .set({shelf_id})
        .where("id = :store_id")
        .setParameters({store_id})
        .execute()
    }
    
}

export {StoreRepository}