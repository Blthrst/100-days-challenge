import { Injectable } from "@nestjs/common";
import { MySqlDataSource } from "./datasource";
import { TestEntity } from "./entities/test.entity";

@Injectable()y
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  insertIntoMySQL(name: string, age: string): void {
    console.log("started");

    const testRepository = MySqlDataSource.getRepository(TestEntity)

    testRepository
    .createQueryBuilder()
    .insert()
    .into(TestEntity)
    .values({
      name: name, age: parseInt(age)
    })

    console.log("ended");
  }
}
