import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GameModule } from "./game/game.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MySQLOptions } from "./database/options";

@Module({
  imports: [GameModule, TypeOrmModule.forRoot(MySQLOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
