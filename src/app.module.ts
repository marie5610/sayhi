import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HiModule } from './hi/hi.module';
import { Hi } from './hi/entities/hi.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'my_db',
      entities: [Hi],
      synchronize: true,
    }),
    HiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
