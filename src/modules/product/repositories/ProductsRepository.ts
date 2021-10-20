import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IFindProductByIDDTO } from "../dtos/IFindProductByIDTO";
import { IPutShelfOnProductDTO } from "../dtos/IPutShelfOnProductDTO";
import { Product } from "../entities/Product";
import { IProductsRepository } from "./IProductsRepository";

class ProductsRepository implements IProductsRepository{

    private repository: Repository<Product>

    constructor(){
        this.repository = getRepository(Product)
    }
    
    async create({ name, easyID, quantity, price, available }: ICreateProductDTO): Promise<Product> {
        
        const product = this.repository.create({name,easyID,quantity,price,available})
        
        await this.repository.save(product)
        
        return product
    }
    
    async FindProductByID({ id }: IFindProductByIDDTO): Promise<Product> {
        const product = await this.repository.findOne(id)

        return product
    }

    async putShelfOnProduct({product_id,shelf_id}:IPutShelfOnProductDTO):Promise<void>{

        await this.repository.createQueryBuilder()
        .update()
        .set({shelf_id})
        .where("id = :product_id")
        .setParameters({product_id})
        .execute()

    }
}
export {ProductsRepository}