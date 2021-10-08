import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("product")
class Product {

    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    easyID:string;

    @Column()
    quantity:number;

    @Column()
    price:number;

    @Column()
    available:boolean;

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
export {Product}