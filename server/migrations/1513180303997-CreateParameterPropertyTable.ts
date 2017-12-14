import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateParameterPropertyTable1513180303997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "parameter_property" ("id" SERIAL NOT NULL, "title" text NOT NULL, "definitionName" text NOT NULL, "definitionGroup" text NOT NULL, "definitionType" integer NOT NULL, "definitionIdentifier" text NOT NULL, "valueType" integer NOT NULL, "valueUnit" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "relatedSourceObjectType" integer NOT NULL, "parameterId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
        await queryRunner.query(`ALTER TABLE "parameter_property" ADD CONSTRAINT "fk_bb3c298ed793eef9486dd0a30ba" FOREIGN KEY ("parameterId") REFERENCES "parameter"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "parameter_property" DROP CONSTRAINT "fk_bb3c298ed793eef9486dd0a30ba"`);
        await queryRunner.query(`DROP TABLE "parameter_property"`);
    }

}
