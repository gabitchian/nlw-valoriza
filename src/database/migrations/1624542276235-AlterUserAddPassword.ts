/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserAddPassword1624542276235 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'password');
  }
}
