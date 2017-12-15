import {MigrationInterface, QueryRunner} from "typeorm";

export class AddProjectWorkTableObjectParameterProperrty1513257746094 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "project_worktable_object_parameter_property" ("id" SERIAL NOT NULL, "instance_guid" text NOT NULL, "parameter_id" integer NOT NULL, "bim_model_be_guid" text NOT NULL, "property_id" integer NOT NULL, "value" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "project_worktable_object_parameter_property"`);
    }

}
