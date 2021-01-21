import { Field, InputType } from "@nestjs/graphql";

@InputType()

export class ElectronicsInput {

    @Field()
    category: string;

    @Field()
    name : string;

    @Field()
    description: string;

    @Field()
    price: string;
}