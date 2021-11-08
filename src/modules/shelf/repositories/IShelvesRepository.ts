import { ICreateShelfDTO } from "../dtos/ICreateShelfDTO";
import { IFindShelfByIDDTO } from "../dtos/IFIndShelfByIDDTO";
import { IListShelfAndProductsDTO } from "../dtos/IListShelfAndProductsDTO";
import { IPutProductOnShelfDTO } from "../dtos/IPutProductOnShelfDTO";
import { IPutStoreOnShelfDTO } from "../dtos/IPutStoreOnShelfDTO";
import { Shelf } from "../entities/Shelf";

interface IShelvesRepository {

    create({name}:ICreateShelfDTO):Promise<Shelf>;
    listAllShelves():Promise<Shelf[]>;
    listShelfAndProducts({shelf_id}:IListShelfAndProductsDTO):Promise<Shelf[]>;
    putProductOnShelf({shelf_id,product_id}:IPutProductOnShelfDTO):Promise<void>;
    findShelfByID({shelf_id}:IFindShelfByIDDTO): Promise<Shelf>;
    putStoreOnShelf({store_id,shelf_id}:IPutStoreOnShelfDTO): Promise<void>;
}

export {IShelvesRepository}