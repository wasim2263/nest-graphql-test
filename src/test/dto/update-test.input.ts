import { CreateTest } from './create-test.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTestInput extends PartialType(CreateTest) {
  @Field(() => Int)
  amount: number;
}
