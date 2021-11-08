import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class InsertShoppingCartInUser1636059119752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.addColumn("users", new TableColumn({
            name:"shoppingCart_id",
            type:"uuid",
            isNullable:true
        }))

        await queryRunner.createForeignKey("users",new TableForeignKey({
            name:"FKShoppingCart",
            columnNames:["shoppingCart_id"],
            referencedTableName:"shoppingCart",
            referencedColumnNames:["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"   
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("users","FKShoppingCart")
        await queryRunner.dropColumn("users","shoppingCart_id")
    }

}
