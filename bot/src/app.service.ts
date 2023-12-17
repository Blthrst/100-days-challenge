import { Inject, Injectable } from '@nestjs/common';
import { Context, Telegraf } from 'telegraf';
import 'dotenv/config';
import { NextFunction } from 'express';

@Injectable()
export class AppService {
  private bot: Telegraf = new Telegraf(process.env.BOT_TOKEN);
  constructor() {
    this.launch()
  }

  public async launch() {
    this.bot.use((ctx, next) => this.sayHello(ctx, next))

    this.bot.launch()
  }
    

  async sayHello(ctx: Context, next: NextFunction) {
    this.bot.on('message', (ctx: Context) => {
      ctx.reply('Hello there!');
    });

    await next()
  }
}
