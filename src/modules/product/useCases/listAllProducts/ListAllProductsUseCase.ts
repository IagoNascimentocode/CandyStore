import { inject, injectable } from "tsyringe";
import { IFindProductByIDDTO } from "../../dtos/IFindProductByIDTO";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListAllProductsUseCase{

    constructor(
        @inject("ProductsRepository")
        private productsRepository:IProductsRepository
    ){}

    async execute():Promise<Product[]>{
        
        const products = await this.productsRepository.ListAllProducts()
        
        return products
    }
}

export {ListAllProductsUseCase}