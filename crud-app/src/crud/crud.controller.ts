import { Controller, Delete, Get, Post, Query, Req, Res } from "@nestjs/common";
import { CrudService } from "./crud.service";
import { Request, Response } from "express";

@Controller("api")
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get("get")
  returnData(): Array<Object> {
    return this.crudService.returnData();
  }

  @Post("post")
  postData(@Req() req: Request, @Res() res: Response): void {
    const times: number = parseInt(req.body.postField);
    console.log(this.crudService.postData(times));
    res.redirect("/");
  }

  @Post("delete")
  deleteData(@Req() req: Request, @Res() res: Response): void {
    const id: number = parseInt(req.body.deleteField);
    console.log(this.crudService.deleteData(id));
    res.redirect("/");
  }

  @Post("put")
  updateData(@Req() req: Request, @Res() res: Response): void {
    const { updateFieldOldId, updateFieldNewId } = req.body
    console.log(
      this.crudService.updateData(
        parseInt(updateFieldOldId),
        parseInt(updateFieldNewId),
      ),
    );
    res.redirect("/");
  }
}
