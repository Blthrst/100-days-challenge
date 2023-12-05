import { Injectable } from "@nestjs/common";
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
    return results;
  }

  async updateInMySQL(id: string, name: string, age: string) {
    this.testsRepository
      .createQueryBuilder()
      .update(TestEntity)
      .set({ name, age: parseInt(age) })
      .where("id = :id", { id })
      .execute();
  }

  async deleteFromMySQL(id: string) {
    this.testsRepository
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
