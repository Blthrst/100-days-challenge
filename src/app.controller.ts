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
  insertIntoMySQL(@Req() req: Request) {
    const {nameField, ageField} = req.body
    this.appService.insertIntoMySQL(nameField, ageField)
  }
}
