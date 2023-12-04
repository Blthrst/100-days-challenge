import { Controller, Get, Res, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("*")
  getHello(@Res() res: Response): void {
    res.sendFile("index.html", { root: "src/public" });
  }

  @Post()
  async insertIntoMySQL(@Req() req: Request, @Res() res: Response) {
    const {nameField, ageField} = req.body
    await this.appService.insertIntoMySQL(nameField, ageField)
    res.redirect("/")
  }

  @Post("entities")
  async getFromMySQL(@Req() req: Request, @Res() res: Response) {
    const {name} = req.body
    res.json(await this.appService.getFromMySQL(name))
  }
}
