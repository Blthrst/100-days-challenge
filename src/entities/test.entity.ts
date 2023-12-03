import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TestEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
