import { ICreateShoppingCartDTO } from "../dtos/ICreateShoppingCartDTO";
import { ShoppingCart } from "../entities/ShoppingCart";

interface IShoppingCartRepository{

    create({user_id}:ICreateShoppingCartDTO):Promise<ShoppingCart>;
    listAllShoppingCart():Promise<ShoppingCart[]>;

}

export {IShoppingCartRepository}