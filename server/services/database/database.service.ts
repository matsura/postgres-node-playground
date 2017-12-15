import { Connection, createConnection, getConnection } from "typeorm";

export interface IConnectionOptions {
  host: string;
  user: string;
  password: string;
  database: string;
  schema: string;
}

export class DatabaseService {

  public static initialize(): void {
    createConnection()
      .then((connection: Connection) => this.connection = connection);
  }

  public static initializeAsync(): Promise<void> {
    return new Promise((resolve: () => void) => {

      createConnection()
        .then((connection: Connection) => {

          this.connection = connection;
          resolve();
        });
    });
  }

  public static getConnection(): Connection {

    if (!this.connection) {
      this.connection = getConnection();
    }
    return this.connection;
  }

  public static connectionOptions(): IConnectionOptions {
    return require('../../../pg-connection.json');
  }
  private static connection: Connection;
}
