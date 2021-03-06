import { createQueryBuilder, Entity, getRepository, Repository } from "typeorm";
import { ICreateShelfDTO } from "../dtos/ICreateShelfDTO";
import { IFindShelfByIDDTO } from "../dtos/IFIndShelfByIDDTO";
import { IListShelfAndProductsDTO } from "../dtos/IListShelfAndProductsDTO";
import { IPutProductOnShelfDTO } from "../dtos/IPutProductOnShelfDTO";
import { IPutStoreOnShelfDTO } from "../dtos/IPutStoreOnShelfDTO";
import { Shelf } from "../entities/Shelf";
import { IShelvesRepository } from "./IShelvesRepository";

@Entity("shelf")
class ShelvesRepository implements IShelvesRepository{

    private repository: Repository<Shelf>

    constructor(){
        this.repository = getRepository(Shelf)
    }
    
    async create({ name }: ICreateShelfDTO): Promise<Shelf> {

        const shelf = this.repository.create({name})
    
        await this.repository.save(shelf)

        return shelf
    }

    async listAllShelves():Promise<Shelf[]>{

        const shelves = this.repository.find()

        return shelves
    }

    async listShelfAndProducts({ shelf_id }: IListShelfAndProductsDTO): Promise<Shelf[]> {
        
        const shelfAndProducts = await this.repository.find({
            where:{id:shelf_id},
            relations:["product"]
        })

        return shelfAndProducts
    }

    async putProductOnShelf({shelf_id,product_id}:IPutProductOnShelfDTO):Promise<void>{

        await this.repository.createQueryBuilder()
        .update()
        .set({product_id})
        .where("id = :shelf_id")
        .setParameters({shelf_id})
        .execute()

    }

    async findShelfByID({ shelf_id}:IFindShelfByIDDTO): Promise<Shelf> {
        const shelf = await this.repository.findOne(shelf_id)

        return shelf
    }

    async putStoreOnShelf({ store_id, shelf_id }: IPutStoreOnShelfDTO): Promise<void> {
        await this.repository.createQueryBuilder()
        .update()
        .set({store_id})
        .where("id = :shelf_id")
        .setParameters({shelf_id})
        .execute()
    }
}

export {ShelvesRepository}


