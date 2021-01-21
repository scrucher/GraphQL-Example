import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()

export class ElectronicsType {
    @Field(type => ID)
    id: string;

    @Field()
    category: string;

    @Field()
    name : string;

    @Field()
    description: string;

    @Field()
    price: string;
}