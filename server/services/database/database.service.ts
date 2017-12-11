import { Sequelize } from 'sequelize-typescript';

import { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USERNAME } from '../../config/environment';
import { Author } from '../../models/author.model';
import { Post } from '../../models/post.model';

export class DatabaseService {

  private static models: Array<any> = [
    Author,
    Post,
  ];

  static initialize(force = false): void {

    const sequelize =  new Sequelize({
      database: DB_DATABASE,
      dialect: DB_DIALECT,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      host: DB_HOST,
    });
    sequelize.addModels(this.models);
    sequelize.sync({
      force,
    });
  }
}
