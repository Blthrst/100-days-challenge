import { Injectable } from "@nestjs/common";
import { MySqlDataSource } from "./datasource";
import { Repository } from "typeorm";
import { TestEntity } from "./entities/test.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TestEntity)
    private testsRepository: Repository<TestEntity>,
  ) {}

  async insertIntoMySQL(name: string, age: string): Promise<void> {
    await this.testsRepository.insert({ name, age: parseInt(age) });
  }

  async getFromMySQL(name: string): Promise<TestEntity[]> {
    const results: TestEntity[] = await this.testsRepository.find({
      select: {
        id: true,
        name: true,
        age: true,
      },
      where: {
        name,
      },
    });
    console.log(results);
    return results;
  }
}
