import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid } from "uuid";
import { ShoppingCart } from "../../shoppingCart/entities/ShoppingCart";

@Entity("users")
class User {

    @PrimaryColumn()
    id: string;
   
    @Column()
    name: string;
   
    @Column()
    email: string;
   
    @Column()
    password: string;
   
    @Column()
    admin: boolean;
   
    @Column()
    city: string;
   
    @Column()
    address: string;
    
    @OneToOne(()=>ShoppingCart,shoppingCart => shoppingCart)
    @JoinColumn({name:"shoppingCart_id"})
    shoppingCart:ShoppingCart;

    @Column()
    shoppingCart_id:string;

    @CreateDateColumn()
    birthDate: Date;
   
    @CreateDateColumn()
    created_at: Date;
   
    @UpdateDateColumn()
    updated_at: Date;
   
    constructor() {
     if (!this.id) {
      this.id = uuid();
        }
    }
    
}
  
export { User }