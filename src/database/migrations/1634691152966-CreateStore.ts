import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStore1634691152966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"store",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"category",
                        type:"varchar"
                    },
                    {
                        name:"shelf_id",
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
                        name:"FKShelf",
                        referencedTableName:"shelf",
                        referencedColumnNames:["id"],
                        columnNames:["shelf_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("store")
    }

}
