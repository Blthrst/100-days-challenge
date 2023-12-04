import { UUID } from "crypto";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TestEntity {
  @PrimaryGeneratedColumn("uuid")
  id: UUID

  @Column()
  name: string;

  @Column()
  age: number;
}
