import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBimModelCategoriesObjectsAndParameters1513179574637 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "bim_model_object_type" ("id" SERIAL NOT NULL, "enum" text NOT NULL, "value" text NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "bim_model_object" ("id" SERIAL NOT NULL, "guid" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "typeId" integer, "categoryId" integer, CONSTRAINT "uk_bim_model_object_guid" UNIQUE ("guid"), PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "bim_model_category" ("id" SERIAL NOT NULL, "enum" text NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "parameter" ("id" SERIAL NOT NULL, "name" text NOT NULL, "active" text NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "typeId" integer, CONSTRAINT "uk_parameter_name" UNIQUE ("name"), PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "parameter_type" ("id" SERIAL NOT NULL, "enum" text NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
        await queryRunner.query(`ALTER TABLE "bim_model_object" ADD CONSTRAINT "fk_3632568dfbb532ce33f1cb479ea" FOREIGN KEY ("typeId") REFERENCES "bim_model_object_type"("id")`);
        await queryRunner.query(`ALTER TABLE "bim_model_object" ADD CONSTRAINT "fk_c0d784b12ca0ed486fa5fa2ac2a" FOREIGN KEY ("categoryId") REFERENCES "bim_model_category"("id")`);
        await queryRunner.query(`ALTER TABLE "parameter" ADD CONSTRAINT "fk_df8b5d1c9d98803a5048ad78a2f" FOREIGN KEY ("typeId") REFERENCES "parameter_type"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "parameter" DROP CONSTRAINT "fk_df8b5d1c9d98803a5048ad78a2f"`);
        await queryRunner.query(`ALTER TABLE "bim_model_object" DROP CONSTRAINT "fk_c0d784b12ca0ed486fa5fa2ac2a"`);
        await queryRunner.query(`ALTER TABLE "bim_model_object" DROP CONSTRAINT "fk_3632568dfbb532ce33f1cb479ea"`);
        await queryRunner.query(`DROP TABLE "parameter_type"`);
        await queryRunner.query(`DROP TABLE "parameter"`);
        await queryRunner.query(`DROP TABLE "bim_model_category"`);
        await queryRunner.query(`DROP TABLE "bim_model_object"`);
        await queryRunner.query(`DROP TABLE "bim_model_object_type"`);
    }

}
