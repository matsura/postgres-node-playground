import {MigrationInterface, QueryRunner} from "typeorm";

export class AuthorModelUpdate1513074064689 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."post" DROP CONSTRAINT "fk_d9a8eb43a1184f58e8f3dd48ab6"`);
        await queryRunner.query(`ALTER TABLE "public"."post" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."post" ALTER COLUMN "authorId" TYPE integer`);
        await queryRunner.query(`ALTER TABLE "public"."post" ALTER COLUMN "authorId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."post" ADD CONSTRAINT "fk_d9a8eb43a1184f58e8f3dd48ab6" FOREIGN KEY ("authorId") REFERENCES "author"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."post" DROP CONSTRAINT "fk_d9a8eb43a1184f58e8f3dd48ab6"`);
        await queryRunner.query(`-- TODO: revert ALTER TABLE "public"."post" ALTER COLUMN "authorId" SET NOT NULL`);
        await queryRunner.query(`-- TODO: revert ALTER TABLE "public"."post" ALTER COLUMN "authorId" TYPE integer`);
        await queryRunner.query(`-- TODO: revert ALTER TABLE "public"."post" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."post" ADD CONSTRAINT "fk_d9a8eb43a1184f58e8f3dd48ab6" FOREIGN KEY ("authorId") REFERENCES "author"("id")`);
    }

}
