import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { User } from "../../accounts/entities/User";
import { Product } from "../../product/entities/Product";

@Entity("shoppingCart")
class ShoppingCart{

    @PrimaryColumn()
    id:string;

    @OneToOne(()=>User,user => user)
    @JoinColumn({name:"user_id"})
    user:User;
    
    @Column()
    user_id:string;

    @OneToMany(()=> Product, product => product.id)
    @JoinColumn({name:"product_id"})
    product:Product[];

    @Column()
    product_id:string;

    @Column()
    total:number;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuid();
        }
    }
}


export {ShoppingCart}