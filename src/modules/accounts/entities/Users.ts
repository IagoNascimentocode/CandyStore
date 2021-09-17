import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid } from "uuid";

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