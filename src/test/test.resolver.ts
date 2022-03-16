import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TestService } from './test.service';
import { Test } from './entities/test.entity';
import { CreateTest } from './dto/create-test.input';

@Resolver(() => Test)
export class TestResolver {
  constructor(private readonly testService: TestService) {}
/**
//  mutation{
//   createTest(createTest:{
//     amount:2
//   }){
//     amount
//     id
//   }
// }
*/
  @Mutation(() => Test)
  createTest(@Args('createTest') createTest: CreateTest) {
    return this.testService.create(createTest);
  }

  @Query(() => [Test])
  tests(){
    return this.testService.findAll();
  }

  // @Query(() => Test, { name: 'test' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.testService.findOne(id);
  // }

  // @Mutation(() => Test)
  // updateTest(@Args('updateTestInput') updateTestInput: UpdateTestInput) {
  //   return this.testService.update(updateTestInput.id, updateTestInput);
  // }

  // @Mutation(() => Test)
  // removeTest(@Args('id', { type: () => Int }) id: number) {
  //   return this.testService.remove(id);
  // }
}
