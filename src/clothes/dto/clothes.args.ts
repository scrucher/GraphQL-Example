import { Field, InputType } from "@nestjs/graphql";
import { Min } from "class-validator";

@InputType()
export class ClothesArgs {
  @Field()

  name:string;

  @Field()
 
  description: string;

  @Field()
  
  category: string;

  @Field()
  
  price: string;
}