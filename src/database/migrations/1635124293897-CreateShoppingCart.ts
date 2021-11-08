import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateShoppingCart1635124293897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"shoppingCart",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"user_id",
                        type:"uuid",
                    },
                    {
                        name:"product_id",
                        type:"uuid",
                        isNullable:true
                    },
                    {
                        name:"total",
                        type:"numeric",
                        default:0
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name:"FKUsers",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                    {
                        name:"FKProduct",
                        referencedTableName:"product",
                        referencedColumnNames:["id"],
                        columnNames:["product_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"   
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("shoppingCart")
    }

}