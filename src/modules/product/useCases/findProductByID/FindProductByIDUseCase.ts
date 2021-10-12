import { inject, injectable } from "tsyringe";
import { IFindProductByIDDTO } from "../../dtos/IFindProductByIDTO";
import { Product } from "../../entities/Product";
import { ProductsRepository } from "../../repositories/ProductsRepository";

@injectable()
class FindProductByIDUseCase {
 
    constructor(
    @inject("ProductsRepository")
    private productsRepository:ProductsRepository)
    {}

    async execute({id}:IFindProductByIDDTO):Promise<Product>{

        const product = await this.productsRepository.FindProductByID({id})

        return product 
    }

}

export {FindProductByIDUseCase}