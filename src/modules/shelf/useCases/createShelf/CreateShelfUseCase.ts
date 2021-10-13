import { inject, injectable } from "tsyringe";
import { ICreateShelfDTO } from "../../dtos/ICreateShelfDTO";
import { Shelf } from "../../entities/Shelf";
import { IShelvesRepository } from "../../repositories/IShelvesRepository";

@injectable()
class CreateShelfUseCase{

    constructor(
        @inject("ShelvesRepository")
        private shelvesRepository:IShelvesRepository
    ){}

        async execute({name,product_id}:ICreateShelfDTO):Promise<Shelf>{

            const shelf = await this.shelvesRepository.create({name,product_id})

            return shelf
        }

}

export {CreateShelfUseCase}