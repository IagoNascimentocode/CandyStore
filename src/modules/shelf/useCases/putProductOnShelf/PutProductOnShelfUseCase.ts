import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "../../../product/repositories/IProductsRepository";
import { IPutProductOnShelfDTO } from "../../dtos/IPutProductOnShelfDTO";
import { IShelvesRepository } from "../../repositories/IShelvesRepository";

@injectable()
class PutProductOnShelfUseCase{

    constructor(
        @inject("ShelvesRepository")
        private shelvesRepository:IShelvesRepository,

        @inject("ProductsRepository")
        private productsRepository:IProductsRepository
    ){}

        async execute({shelf_id,product_id}:IPutProductOnShelfDTO):Promise<void>{

            const product = await this.productsRepository.FindProductByID({id:product_id})

            if(!product){
                throw Error("product does not exist")
            }

            const shelf = await this.shelvesRepository.FindShelfByID({shelf_id})

            if(!shelf){
                throw Error("shelf does not exist")
            }

            await this.shelvesRepository.putProductOnShelf({shelf_id,product_id})
           
            await this.productsRepository.putShelfOnProduct({product_id,shelf_id})
        }
}

export {PutProductOnShelfUseCase}