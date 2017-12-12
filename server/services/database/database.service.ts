import { Connection, createConnection, getConnection } from "typeorm";

export class DatabaseService {

  public static initialize(): void {
    createConnection()
      .then((connection: Connection) => this.connection = connection);
  }

  public static getConnection(): Connection {

    if (!this.connection) {
      this.connection = getConnection();
    }
    return this.connection;
  }

  private static connection: Connection;
}