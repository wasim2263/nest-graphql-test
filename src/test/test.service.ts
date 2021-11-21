import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTest } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(@InjectRepository(Test) private testRepository: Repository<Test>){}
  create(createTest: CreateTest) {
    const newTest = this.testRepository.create(createTest);
    return this.testRepository.save(newTest);
  }

  async findAll(): Promise<Test[]> {
    return this.testRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} test`;
  // }

  // update(id: number, updateTestInput: UpdateTestInput) {
  //   return `This action updates a #${id} test`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} test`;
  // }
}
