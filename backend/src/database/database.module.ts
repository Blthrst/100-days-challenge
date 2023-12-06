import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entitites/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [DatabaseService]
})
export class DatabaseModule {}
