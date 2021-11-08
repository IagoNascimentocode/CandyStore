import { inject, injectable } from "tsyringe";
import { IListShelfAndProductsDTO } from "../../dtos/IListShelfAndProductsDTO";
import { Shelf } from "../../entities/Shelf";
import { IShelvesRepository } from "../../repositories/IShelvesRepository";

@injectable()
class ListShelfAndProductsUseCase{

    constructor(
        @inject("ShelvesRepository")
        private shelvesRepository:IShelvesRepository
    ){}

    async execute({shelf_id}:IListShelfAndProductsDTO):Promise<Shelf[]>{

        const shelf = await this.shelvesRepository.listShelfAndProducts({shelf_id})

        return shelf
    }

}

export{ListShelfAndProductsUseCase}