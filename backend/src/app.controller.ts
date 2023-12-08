import { Controller, Get, Post, Res, Req } from "@nestjs/common";
import { Request, Response } from "express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  page() {
    return "hello world";
}
}
