import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Clothes } from './colthes.entity';
import { ClothesInput } from './dto/clothes.input';
import { ClothesArgs } from './dto/clothes.args';
import *as uuid from 'uuid';

@Injectable()
export class ClothesService {
    constructor (@InjectRepository(Clothes) 
    private clothesRepository : Repository <Clothes> ) {}


    async createOne (clothesInput: ClothesInput):Promise<Clothes>{
        const {name, category, description, price } = clothesInput;

        const createone = await this.clothesRepository.create({
            id: uuid,
            name,
            description,
            category,
            price,

        }) ;

        return this.clothesRepository.save(createone);

    } 


    async getById (id: string) : Promise<Clothes> {
        return this.clothesRepository.findOne({id});
    }

    async getAll (clothesArgs: ClothesArgs): Promise <Clothes[]>{
        const elect = await this.clothesRepository.find();
      
          return elect;
        
      
    }

    async getByCategory (category: string):Promise<Clothes> {
        const find = await this.clothesRepository.findOne({category});
        return find;
    }


}
