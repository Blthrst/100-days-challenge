import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  posterUrl: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  releaseDate: string;

  @Column()
  price: number;

  @Column()
  priceWithDiscount: number;

  @Column()
  discount: number;
}