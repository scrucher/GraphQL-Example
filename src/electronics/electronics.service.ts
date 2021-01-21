import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Electronics } from './electronics.entity';
import { ElectronicsInput } from './DTO/electronics.input';
import {v5 as uuid } from 'uuid';
import { ElectronicsArgs } from './DTO/electronics.args';

@Injectable()
export class ElectronicsService {
    constructor (@InjectRepository(Electronics) 
    private lessonRepository : Repository<Electronics> ) {}


    async createOne (electronicsInput: ElectronicsInput):Promise<Electronics>{
        const {name, category, description, price } = electronicsInput;

        const createone = await this.lessonRepository.create({
            id: uuid(),
            name,
            description,
            category,
            price,

        }) ;

        return this.lessonRepository.save(createone);

    } 


    async getById (id: string) : Promise<Electronics> {
        return this.lessonRepository.findOne({id});
    }

    async getAll (electronicsArgs: ElectronicsArgs): Promise <Electronics[]>{
        const elect = await this.lessonRepository.find();
      
          return elect;
        
      
    }

    async getByCategory (category: string):Promise<Electronics> {
        const find = await this.lessonRepository.findOne({category});
        return find;
    }
}
