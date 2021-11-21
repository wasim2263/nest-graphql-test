import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Test } from "./test/entities/test.entity";
import { TestModule } from "./test/test.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      autoSchemaFile: join(process.cwd(), "src/schemas/schema.gql"),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database:':memory:',
      entities:[Test],
      synchronize: false,
    }),
    TestModule,
  ]
})
export class AppModule {}
