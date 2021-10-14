import { ICreateShelfDTO } from "../dtos/ICreateShelfDTO";
import { IListShelfAndProductsDTO } from "../dtos/IListShelfProductsDTO";
import { Shelf } from "../entities/Shelf";

interface IShelvesRepository {

    create({name}:ICreateShelfDTO):Promise<Shelf>;
    listShelfAndProducts({shelf_id}:IListShelfAndProductsDTO):Promise<Shelf[]>;

}

export {IShelvesRepository}