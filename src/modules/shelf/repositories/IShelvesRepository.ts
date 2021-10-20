import { ICreateShelfDTO } from "../dtos/ICreateShelfDTO";
import { IFindShelfByIDDTO } from "../dtos/IFIndShelfByIDDTO";
import { IListShelfAndProductsDTO } from "../dtos/IListShelfAndProductsDTO";
import { IPutProductOnShelfDTO } from "../dtos/IPutProductOnShelfDTO";
import { Shelf } from "../entities/Shelf";

interface IShelvesRepository {

    create({name}:ICreateShelfDTO):Promise<Shelf>;
    listShelfAndProducts({shelf_id}:IListShelfAndProductsDTO):Promise<Shelf[]>;
    putProductOnShelf({shelf_id,product_id}:IPutProductOnShelfDTO):Promise<void>;
    FindShelfByID({shelf_id}:IFindShelfByIDDTO): Promise<Shelf>
}

export {IShelvesRepository}