import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../entities/Product";

interface IProductsRepository {

    create({name,easyID,quantity,price,available}:ICreateProductDTO):Promise<Product>
}

export {IProductsRepository}