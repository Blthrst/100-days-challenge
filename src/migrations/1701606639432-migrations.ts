import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migrations1701606639432 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "test_entity",
        columns: [
          {
            name: "id",
            type: "varchar(500)",
            isPrimary: false,
            generatedIdentity: "ALWAYS",
          },
          {
            name: "name",
            type: "varchar(255)",
            isNullable: false,
            isPrimary: false
          },
          {
            name: "age",
            type: "int",
            isNullable: false,
            isPrimary: false
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS test_entity
        `);
  }
}
