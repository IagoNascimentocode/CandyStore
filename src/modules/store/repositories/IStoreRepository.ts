import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IFindStoreByID } from "../dtos/IFindStoreByID";
import { Store } from "../entities/Store";

interface IStoreRepository{
    create({name,category,shelf_id}:ICreateStoreDTO):Promise<Store>;
    listAllStore():Promise<Store[]>;
    listStoreAndShelves({store_id}:IFindStoreByID):Promise<Store[]>;
}

export{IStoreRepository}