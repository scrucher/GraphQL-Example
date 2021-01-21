import { Field, ID } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
@ObjectType()

export class ClothesType {
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