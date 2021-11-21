import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTest {
  @Field()
  amount: number;
}
