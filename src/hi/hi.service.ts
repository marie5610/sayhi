import { Injectable } from '@nestjs/common';
import { CreateHiDto } from './dto/create-hi.dto';
import { UpdateHiDto } from './dto/update-hi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hi } from './entities/hi.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HiService {
  constructor(@InjectRepository(Hi) private hiRepo: Repository<Hi>) {}

  create(createHiDto: CreateHiDto) {
    const newHi = this.hiRepo.create(createHiDto);
    return this.hiRepo.save(newHi);
  }

  findAll() {
    return this.hiRepo.find();
  }

  findOne(id: number) {
    return this.hiRepo.findOne({ where: { id } });
  }

  update(id: number, updateHiDto: UpdateHiDto) {
    return this.hiRepo.update(id, updateHiDto);
  }

  remove(id: number) {
    return this.hiRepo.delete(id);
  }
}
