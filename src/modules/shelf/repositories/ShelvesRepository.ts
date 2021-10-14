import { Entity, getRepository, Repository } from "typeorm";
import { ICreateShelfDTO } from "../dtos/ICreateShelfDTO";
import { IListShelfAndProductsDTO } from "../dtos/IListShelfProductsDTO";
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
            relations:["products"]
        })

        return shelfAndProducts
    }


}

export {ShelvesRepository}


