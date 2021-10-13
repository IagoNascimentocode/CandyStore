import { ICreateShelfDTO } from "../dtos/ICreateShelfDTO";
import { Shelf } from "../entities/Shelf";

interface IShelvesRepository {

    create({name,product_id}:ICreateShelfDTO):Promise<Shelf>

}

export {IShelvesRepository}