import { Module } from '@nestjs/common';
import { HiService } from './hi.service';
import { HiController } from './hi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hi } from './entities/hi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hi])],
  controllers: [HiController],
  providers: [HiService],
})
export class HiModule {}
