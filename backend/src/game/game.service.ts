import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Game } from "../entitites/game.entity";
import { InsertResult, Repository } from "typeorm";

interface isAdded {
  isAdded: boolean;
}

interface isUpdated {
  isUpdated: boolean;
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
    priceWithDiscount: number,
    discount: number,
  ): Promise<isAdded> {
    const insertResult: InsertResult = await this.gameRepository.insert({
      posterUrl,
      title,
      description,
      releaseDate,
      price,
      priceWithDiscount,
      discount,
    });

    if (insertResult.raw?.affectedRows != 0) return { isAdded: true };
    else return { isAdded: false };
  }

  async getGames(): Promise<Game[]> {
    return await this.gameRepository.find();
  }

  async getGamesByDiscount(amount: number): Promise<Game[]> {
    const games = await this.gameRepository.find();
    const gamesSortedByDiscount = games.sort((a, b) => b.discount - a.discount);

    return gamesSortedByDiscount.slice(0, amount)
  }

  async updateGame(
    id: string,
    posterUrl: string,
    title: string,
    description: string,
    releaseDate: string,
    price: number,
    priceWithDiscount: number,
    discount: number,
  ): Promise<isUpdated> {
    const foundGame = await this.gameRepository.findOneBy({ id });
    if (foundGame != null) {
      foundGame.posterUrl = posterUrl;
      foundGame.description = description;
      foundGame.title = title;
      foundGame.releaseDate = releaseDate;
      foundGame.price = price;
      foundGame.priceWithDiscount = priceWithDiscount;
      foundGame.discount = discount;

      this.gameRepository.save(foundGame);

      return { isUpdated: true };
    } else return { isUpdated: false };
  }
}
