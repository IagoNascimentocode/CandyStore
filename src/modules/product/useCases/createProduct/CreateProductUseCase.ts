import { inject, injectable } from "tsyringe";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductUseCase {

    constructor(
        @inject("ProductsRepository")
        private productsRepository:IProductsRepository
    ){}

    async execute({name,easyID,quantity,price,available}:ICreateProductDTO){

        const product = await this.productsRepository.create({name,easyID,quantity,price,available})

    }


}

export {CreateProductUseCase}