import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
@InputType()

export class ClothesInput {
    @MinLength(1)
    @Field()
    category: string;

    @Field()
    name : string;

    @Field()
    description: string;

    @Field()
    price: string;
}