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

  @Post("entities/insert")
  async insertIntoMySQL(@Req() req: Request, @Res() res: Response) {
    const { nameField, ageField } = req.body;
    await this.appService.insertIntoMySQL(nameField, ageField);
    res.redirect("/");
  }

  @Post("/entities/update")
  async updateInMySQL(@Req() req: Request, @Res() res: Response) {
    const { id, name, age } = req.body;
    await this.appService.updateInMySQL(id, name, age);
    res.redirect("/");
  }

  @Post("entities")
  async getFromMySQL(@Req() req: Request, @Res() res: Response) {
    const { name } = req.body;
    res.json(await this.appService.getFromMySQL(name));
  }

  @Post("entities/delete")
  async deleteFromMySQL(@Req() req: Request, @Res() res: Response) {
    const { id } = req.body;
    res.json(await this.appService.deleteFromMySQL(id));
  }
}
