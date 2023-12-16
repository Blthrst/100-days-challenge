import { Controller, Inject, Param } from "@nestjs/common";
import { GameService } from "./game.service";
import { Get, Post, Req, Res } from "@nestjs/common";
import { Response, Request } from "express";

@Controller()
export class GameController {
  constructor(private gameService: GameService) {}

  @Get("games")
  async getGames(@Res() res: Response) {
    res.json(await this.gameService.getGames());
  }

  @Get("games/orderedByDiscount/:amount")
  async getGamesByDiscount(@Param("amount") amount: number, @Res() res: Response) {
    res.json(await this.gameService.getGamesByDiscount(amount))
  }

  @Post("addgame")
  async createGame(@Req() req: Request, @Res() res: Response) {
    const { posterUrl, title, description, releaseDate, price, priceWithDiscount, discount } =
      req.body;

    res.json(
      await this.gameService.insertGame(
        posterUrl,
        title,
        description,
        releaseDate,
        price,
        priceWithDiscount,
        discount,
      ),
    );
  }

  @Post("updategame")
  async updateGame(@Req() req: Request, @Res() res: Response) {
    const { id, posterUrl, title, description, releaseDate, price, priceWithDiscount, discount } =
      req.body;

    res.json(
      await this.gameService.updateGame(
        id,
        posterUrl,
        title,
        description,
        releaseDate,
        price,
        priceWithDiscount,
        discount,
      ),
    );
  }
}
