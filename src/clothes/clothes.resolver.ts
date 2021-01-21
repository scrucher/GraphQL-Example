import { Mutation } from '@nestjs/graphql';
import { Clothes } from './colthes.entity';
import { Args } from '@nestjs/graphql';
import { ClothesType } from './clothes.type';
import { Query, Resolver } from '@nestjs/graphql';
import { ClothesService } from './clothes.service';
import { ClothesArgs } from './dto/clothes.args';
import { ClothesInput } from './dto/clothes.input';

@Resolver(of => ClothesType)

export class ClothesResolver {
    constructor (private clothesService: ClothesService) {}


        @Query(returns =>[ ClothesType])
        getAll(@Args('clothesArgs')
        clothessArgs: ClothesArgs
        ): Promise<Clothes[]> {
        return this.clothesService.getAll(clothessArgs);
    }

        @Mutation(returns => ClothesType)

       async  createOne (@Args('clothesInput') clothesInput: ClothesInput): Promise <Clothes> {
            return this.clothesService.createOne(clothesInput);
        }

        @Query(returns => ClothesType)

        async getByID (@Args('id')id:string):Promise<Clothes>{
            return this.clothesService.getById(id);
        }

        @Query(returns => ClothesType)

        async getByCategory (@Args('category')category:string):Promise<Clothes>{
            return this.clothesService.getById(category);
        }


}