import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IFindProductByIDDTO } from "../dtos/IFindProductByIDTO";
import { IPutShelfOnProductDTO } from "../dtos/IPutShelfOnProductDTO";
import { Product } from "../entities/Product";

interface IProductsRepository {

    create({name,easyID,quantity,price,available}:ICreateProductDTO):Promise<Product>;
    ListAllProducts():Promise<Product[]>
    FindProductByID ({id}:IFindProductByIDDTO):Promise<Product>;
    putShelfOnProduct({product_id,shelf_id}:IPutShelfOnProductDTO):Promise<void>;
    deleteProduct({id}:IFindProductByIDDTO):Promise<void>;

}

export {IProductsRepository}