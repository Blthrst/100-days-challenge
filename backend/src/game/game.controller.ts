import { Controller, Inject } from "@nestjs/common";
import { GameService } from "./game.service";
import { Get, Post, Req, Res } from "@nestjs/common";
import { Response, Request } from "express";

@Controller()
export class GameController {
  constructor(private gameService: GameService) {}

  @Get("games")
  getGames() {}

  @Post("addgame")
  async createGame(@Req() req: Request, @Res() res: Response) {
    const { posterUrl, title, description, releaseDate, price, discount } =
      req.body;

    res.json(
      await this.gameService.insertGame(
        posterUrl,
        title,
        description,
        releaseDate,
        price,
        discount,
      ),
    );
  }
}
