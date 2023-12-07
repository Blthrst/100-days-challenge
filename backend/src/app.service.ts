import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { Game } from './database/entitites/game.entity';

@Injectable()
export class AppService {
  constructor(private databaseService: DatabaseService) {}

  async createGame(
    posterUrl: string,
    title: string,
    description: string,
    releaseDate: string,
    price: number,
    discount: number,
  ) {
    await this.databaseService.insertGame(posterUrl, title, description, releaseDate, price, discount);
  }
}
