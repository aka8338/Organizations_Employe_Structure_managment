import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './db/dbConfig';
@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig), // database configuration here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
