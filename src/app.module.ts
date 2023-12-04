import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySQLOptions } from './options';
import { TestEntity } from './entities/test.entity';

@Module({
  imports: [TypeOrmModule.forRoot(MySQLOptions), TypeOrmModule.forFeature([TestEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
