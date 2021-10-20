import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Shelf } from "../../shelf/entities/Shelf";

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

    @ManyToOne(()=> Shelf)
    @JoinColumn({name:"shelf_id"})
    shelf:Shelf

    @Column()
    shelf_id:string;

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