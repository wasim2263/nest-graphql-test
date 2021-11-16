import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTest {
  @Field(() => Int)
  id:number;
  @Field()
  amount: number;
}
