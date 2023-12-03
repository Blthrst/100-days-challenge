import { MigrationInterface, QueryRunner } from "typeorm"

export class Migrations1701606639432 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE tests (
                id INT NOT NULL,
                name VARCHAR(255) NOT NULL,
                age INT NOT NULL,
                PRIMARY KEY(id)
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE tests IF EXISTS
        `)
    }

}
