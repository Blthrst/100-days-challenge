import { Controller, Get, Post, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  page() {
    return 'hello world';
  }

  @Post('addgame')
  async createGame(@Req() req: Request, @Res() res: Response) {
    const { posterUrl, title, description, releaseDate, price, discount } =
      req.body;
    await this.appService.createGame(
      posterUrl,
      title,
      description,
      releaseDate,
      price,
      discount,
    );
    res.redirect('/');
  }
}
