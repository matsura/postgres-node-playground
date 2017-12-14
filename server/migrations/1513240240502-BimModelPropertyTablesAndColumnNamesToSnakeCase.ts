import {MigrationInterface, QueryRunner} from "typeorm";

export class BimModelPropertyTablesAndColumnNamesToSnakeCase1513240240502 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "bim_model_property_value_type" ("id" SERIAL NOT NULL, "enum" text NOT NULL, "value" text NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "bim_model_property_value_unit" ("id" SERIAL NOT NULL, "enum" text NOT NULL, "value" text NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "bim_model_property" ("id" SERIAL NOT NULL, "definition_group" text NOT NULL, "definition_identifier" text NOT NULL, "definition_name" text NOT NULL, "definition_type" integer NOT NULL, "value_type" integer NOT NULL, "value_unit" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "bim_model_property_type" ("id" SERIAL NOT NULL, "enum" text NOT NULL, "value" text NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
        await queryRunner.query(`ALTER TABLE "bim_model_property" ADD CONSTRAINT "fk_b711af1ccc25d64af283c4b0240" FOREIGN KEY ("definition_type") REFERENCES "bim_model_property_type"("id")`);
        await queryRunner.query(`ALTER TABLE "bim_model_property" ADD CONSTRAINT "fk_49cedd615173fa01e71b1f5d75d" FOREIGN KEY ("value_type") REFERENCES "bim_model_property_value_type"("id")`);
        await queryRunner.query(`ALTER TABLE "bim_model_property" ADD CONSTRAINT "fk_9f93f52120c2aff59b9b8df5902" FOREIGN KEY ("value_type") REFERENCES "bim_model_property_value_unit"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "bim_model_property" DROP CONSTRAINT "fk_9f93f52120c2aff59b9b8df5902"`);
        await queryRunner.query(`ALTER TABLE "bim_model_property" DROP CONSTRAINT "fk_49cedd615173fa01e71b1f5d75d"`);
        await queryRunner.query(`ALTER TABLE "bim_model_property" DROP CONSTRAINT "fk_b711af1ccc25d64af283c4b0240"`);
        await queryRunner.query(`DROP TABLE "bim_model_property_type"`);
        await queryRunner.query(`DROP TABLE "bim_model_property"`);
        await queryRunner.query(`DROP TABLE "bim_model_property_value_unit"`);
        await queryRunner.query(`DROP TABLE "bim_model_property_value_type"`);
    }

}
