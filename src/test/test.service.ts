import { Injectable } from '@nestjs/common';
import { CreateTest } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  create(createTest: CreateTest) {
    return 'This action adds a new test';
  }

  async findAll(): Promise<Test[]> {
    const a = new Test();
    a.amount = 12;
    a.id=1;
    const a1 = new Test();
    a1.amount = 123;
    a1.id=2;
    return [a, a1];
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
