import { Module } from "@nestjs/common";
import { GameService } from "./game.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Game } from "../entitites/game.entity";
import { GameController } from "./game.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GameService],
  controllers: [GameController]
})
export class GameModule {}
