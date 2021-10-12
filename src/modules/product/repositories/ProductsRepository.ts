import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IFindProductByIDDTO } from "../dtos/IFindProductByIDTO";
import { Product } from "../entities/Product";
import { IProductsRepository } from "./IProductsRepository";

class ProductsRepository implements IProductsRepository{

    private repository: Repository<Product>

    constructor(){
        this.repository = getRepository(Product)
    }
    async FindProductByID({ id }: IFindProductByIDDTO): Promise<Product> {
        const product = await this.repository.findOne(id)

        return product
    }

    async create({ name, easyID, quantity, price, available }: ICreateProductDTO): Promise<Product> {
    
        const product = this.repository.create({name,easyID,quantity,price,available})

        await this.repository.save(product)

        return product
    }

}
export {ProductsRepository}