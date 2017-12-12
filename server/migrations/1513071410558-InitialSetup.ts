import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialSetup1513071410558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "authorId" integer, PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "name" text NOT NULL, "age" integer NOT NULL, "description" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY("id"))`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "fk_d9a8eb43a1184f58e8f3dd48ab6" FOREIGN KEY ("authorId") REFERENCES "author"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "fk_d9a8eb43a1184f58e8f3dd48ab6"`);
        await queryRunner.query(`DROP TABLE "author"`);
        await queryRunner.query(`DROP TABLE "post"`);
    }

}
