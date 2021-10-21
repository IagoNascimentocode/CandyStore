import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Shelf } from "../../shelf/entities/Shelf";

@Entity("store")
class Store {
    
    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    category:string;

    @OneToMany(() => Shelf, shelf => shelf.store) 
    @JoinColumn({name:"shelf_id"})
    shelf:Shelf[];

    @Column()
    shelf_id:string;
    
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
export {Store}