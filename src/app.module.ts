import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TestModule } from "./test/test.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      autoSchemaFile: join(process.cwd(), "src/schemas/schema.gql"),
    }),
    TestModule,
  ]
})
export class AppModule {}
