import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Game } from "../entitites/game.entity";
import { InsertResult, Repository } from "typeorm";

interface isAdded {
  isAdded: boolean;
}

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
  ) {}

  async insertGame(
    posterUrl: string,
    title: string,
    description: string,
    releaseDate: string,
    price: number,
    discount: number,
  ): Promise<isAdded> {
    const insertResult: InsertResult = await this.gameRepository.insert({
      posterUrl,
      title,
      description,
      releaseDate,
      price,
      discount,
    });

    if (insertResult.raw?.affectedRows != 0) return { isAdded: true };
    else return { isAdded: false };
  }

  async getGames(): Promise<Game[]> {
    return this.gameRepository.find();
  }
}
