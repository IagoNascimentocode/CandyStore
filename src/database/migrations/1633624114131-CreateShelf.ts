import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateShelf1633624114131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"shelf",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:'varchar'
                    },
                    {
                        name:"product_id",
                        type:"uuid",
                        isNullable:true
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
        await queryRunner.dropTable("shelf")
    }

}
