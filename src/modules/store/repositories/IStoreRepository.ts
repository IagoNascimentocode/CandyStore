import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IFindStoreByID } from "../dtos/IFindStoreByID";
import { IPutShelfOnStoreDTO } from "../dtos/IPutShelfOnStoreDTO";
import { Store } from "../entities/Store";

interface IStoreRepository{
    create({name,category}:ICreateStoreDTO):Promise<Store>;
    listAllStore():Promise<Store[]>;
    listStoreAndShelves({store_id}:IFindStoreByID):Promise<Store[]>;
    putShelfOnStore({store_id,shelf_id}:IPutShelfOnStoreDTO):Promise<void>;
}

export{IStoreRepository}