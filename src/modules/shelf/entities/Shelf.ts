import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "../../product/entities/Product";
import { Store } from "../../store/entities/Store";

@Entity("shelf")
class Shelf {

    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @OneToMany(()=> Product ,product => product.shelf)
    @JoinColumn({name:"product_id"})
    product:Product[];

    @Column()
    product_id:string;

    @ManyToOne(() => Store)
    @JoinColumn({name:"store_id"})
    store:Store;

    @Column()
    store_id:string

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

export {Shelf}