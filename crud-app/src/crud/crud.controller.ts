import { Controller, Get, Post, Query } from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller('api')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get('get')
  returnData(): Array<Object> {
    return this.crudService.returnData();
  }

  @Post('post')
  postData(@Query('times') times: number): void {
    console.log( this.crudService.postData(times) )
  }
}
