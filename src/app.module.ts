import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySQLOptions } from './options';

@Module({
  imports: [TypeOrmModule.forRoot(MySQLOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
