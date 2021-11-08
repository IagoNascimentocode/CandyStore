import { inject, injectable } from "tsyringe";
import { ShoppingCart } from "../../entities/ShoppingCart";
import { IShoppingCartRepository } from "../../repositories/IShoppingCartRepository";

@injectable()
class FindAllShoppingCartUseCase{

    constructor(
        @inject("ShoppingCartRepository")
        private shoppingCartRepository:IShoppingCartRepository        
    ){}

    async execute():Promise<ShoppingCart[]>{

        const all = this.shoppingCartRepository.listAllShoppingCart()

        return all
    }
}

export {FindAllShoppingCartUseCase}