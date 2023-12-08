import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migration1701866618689 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'game',
        columns: [
          {
            name: 'id',
            type: 'varchar(500)',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'posterUrl',
            type: 'varchar(500)',
            isNullable: false,
          },
          {
            name: 'title',
            type: 'varchar(500)',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar(500)',
            isNullable: false,
          },
          {
            name: 'releaseDate',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'double',
            isNullable: false,
          },
          {
            name: 'discount',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("games")
  }
}
