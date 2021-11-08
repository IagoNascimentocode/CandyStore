import { getRepository, Repository } from "typeorm";
import { ICreateShoppingCartDTO } from "../dtos/ICreateShoppingCartDTO";
import { ShoppingCart } from "../entities/ShoppingCart";
import { IShoppingCartRepository } from "./IShoppingCartRepository";

class ShoppingCartRepository implements IShoppingCartRepository{
    
    private repository: Repository<ShoppingCart>

    constructor(){
        this.repository = getRepository(ShoppingCart)
    }



    async create({ user_id }: ICreateShoppingCartDTO): Promise<ShoppingCart> {

        const shoppingCart = this.repository.create({user_id})

        await this.repository.save(shoppingCart)

        return shoppingCart
    }
    
    async listAllShoppingCart(): Promise<ShoppingCart[]> {
        
        const all = await this.repository.find({
            relations:["user"]
        });
        
        return all
    }
}

export {ShoppingCartRepository}