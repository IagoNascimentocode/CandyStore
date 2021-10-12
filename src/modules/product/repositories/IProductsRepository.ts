import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IFindProductByIDDTO } from "../dtos/IFindProductByIDTO";
import { Product } from "../entities/Product";

interface IProductsRepository {

    create({name,easyID,quantity,price,available}:ICreateProductDTO):Promise<Product>
    FindProductByID ({id}:IFindProductByIDDTO):Promise<Product>
}

export {IProductsRepository}