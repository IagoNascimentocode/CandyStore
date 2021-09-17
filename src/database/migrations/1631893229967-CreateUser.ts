import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1631893229967 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns: [
                    {
                       name: "id",
                       type: "uuid",
                       isPrimary:true 
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"password",
                        type:"varchar"
                    },
                    {
                        name:"admin",
                        type:"varchar",
                        default:false
                    },
                    {
                        name:"city",
                        type:"varchar"
                    },
                    {
                        name:"address",
                        type:"varchar"
                    },
                    {
                        name: "birthDate",
                        type: "timestamp"
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
                ] 
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
