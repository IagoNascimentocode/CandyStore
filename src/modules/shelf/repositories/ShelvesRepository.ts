import { Entity, getRepository, Repository } from "typeorm";
import { ICreateShelfDTO } from "../dtos/ICreateShelfDTO";
import { Shelf } from "../entities/Shelf";
import { IShelvesRepository } from "./IShelvesRepository";

@Entity("shelf")
class ShelvesRepository implements IShelvesRepository{

    private repository: Repository<Shelf>

    constructor(){
        this.repository = getRepository(Shelf)
    }
    
    async create({ name, product_id }: ICreateShelfDTO): Promise<Shelf> {

        const shelf = this.repository.create({name,product_id})
    
        await this.repository.save(shelf)

        return shelf
    }

}

export {ShelvesRepository}


