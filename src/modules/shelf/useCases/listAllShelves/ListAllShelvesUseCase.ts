import { inject, injectable } from "tsyringe";
import { Shelf } from "../../entities/Shelf";
import { IShelvesRepository } from "../../repositories/IShelvesRepository";

@injectable()
class ListAllShelvesUseCase{

    constructor(
        @inject("ShelvesRepository")
        private shelvesRepository:IShelvesRepository
    ){}

    async execute():Promise<Shelf[]>{
    
        const shelves = await this.shelvesRepository.listAllShelves()

        return shelves
    }

    }
export {ListAllShelvesUseCase}