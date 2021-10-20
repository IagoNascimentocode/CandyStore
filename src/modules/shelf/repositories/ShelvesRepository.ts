import { Entity, getRepository, Repository } from "typeorm";
import { ICreateShelfDTO } from "../dtos/ICreateShelfDTO";
import { IFindShelfByIDDTO } from "../dtos/IFIndShelfByIDDTO";
import { IListShelfAndProductsDTO } from "../dtos/IListShelfAndProductsDTO";
import { IPutProductOnShelfDTO } from "../dtos/IPutProductOnShelfDTO";
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

    async FindShelfByID({ shelf_id}:IFindShelfByIDDTO): Promise<Shelf> {
        const shelf = await this.repository.findOne(shelf_id)

        return shelf
    }
}

export {ShelvesRepository}


