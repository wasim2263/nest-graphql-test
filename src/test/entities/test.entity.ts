import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Test {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id:number;
  @Column()
  @Field(()=> Int)
  amount: number;
}
