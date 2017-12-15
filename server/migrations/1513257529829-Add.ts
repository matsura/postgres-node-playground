import {MigrationInterface, QueryRunner} from "typeorm";

export class Add1513257529829 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "project_worktable_object" ("id" SERIAL NOT NULL, "guid" uuid NOT NULL, "type" integer NOT NULL, "category" integer NOT NULL, "data" jsonb NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "uk_project_worktable_object_guid" UNIQUE ("guid"), PRIMARY KEY("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "project_worktable_object"`);
    }

}
