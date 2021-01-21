import { Field, InputType } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@InputType()
export class ElectronicsArgs {
  @Field()
  @Min(0)
  name:string;

  @Field()
  @Min(0)
  description: string;

  @Field()
  @Min(0)
  category: string;

  @Field()
  @Min(0)
  price: string;
}