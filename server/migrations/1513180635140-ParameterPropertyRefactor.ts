import {MigrationInterface, QueryRunner} from "typeorm";

export class ParameterPropertyRefactor1513180635140 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP CONSTRAINT "fk_bb3c298ed793eef9486dd0a30ba"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "definitionName"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "definitionGroup"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "definitionType"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "definitionIdentifier"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "valueType"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "valueUnit"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "relatedSourceObjectType"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "parameterId"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "definition_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "definition_group" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "definition_type" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "definition_identifier" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "value_type" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "value_unit" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "related_source_object_type" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "parameter_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD CONSTRAINT "fk_34d9352a3f7f22fd6465f0e74d3" FOREIGN KEY ("parameter_id") REFERENCES "parameter"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP CONSTRAINT "fk_34d9352a3f7f22fd6465f0e74d3"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "parameter_id"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "related_source_object_type"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "value_unit"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "value_type"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "definition_identifier"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "definition_type"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "definition_group"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" DROP "definition_name"`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "parameterId" integer(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "relatedSourceObjectType" integer(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "valueUnit" integer(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "valueType" integer(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "definitionIdentifier" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "definitionType" integer(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "definitionGroup" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD "definitionName" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."parameter_property" ADD CONSTRAINT "fk_bb3c298ed793eef9486dd0a30ba" FOREIGN KEY ("") REFERENCES ""("")`);
    }

}
