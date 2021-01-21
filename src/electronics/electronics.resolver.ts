import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ElectronicsType } from "./electronics.type";
import { ElectronicsService } from './electronics.service';
import { ElectronicsInput } from "./DTO/electronics.input";
import { Electronics } from "./electronics.entity";
import { ElectronicsArgs } from "./DTO/electronics.args";



@Resolver(of => ElectronicsType)

export class ElectronicsResolver {
    constructor (private electronicsService: ElectronicsService) {}


        @Query(returns =>[ ElectronicsType])
        getAll(@Args('electronicsArgs')
        electronicsArgs: ElectronicsArgs
        ): Promise<Electronics[]> {
        return this.electronicsService.getAll(electronicsArgs);
    }

        @Mutation(returns => ElectronicsType)

       async  createOne (@Args('elecronicsInput') electronicsInput: ElectronicsInput): Promise <Electronics> {
            return this.electronicsService.createOne(electronicsInput);
        }

        @Query(returns => ElectronicsType)

        async getByID (@Args('id')id:string):Promise<Electronics>{
            return this.electronicsService.getById(id);
        }

        @Query(returns => ElectronicsType)

        async getByCategory (@Args('category')category:string):Promise<Electronics>{
            return this.electronicsService.getById(category);
        }


}