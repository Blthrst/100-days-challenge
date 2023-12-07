import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entitites/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
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
  ): Promise<void> {
    await this.gameRepository.insert({
      posterUrl,
      title,
      description,
      releaseDate,
      price,
      discount,
    });
  }
}
