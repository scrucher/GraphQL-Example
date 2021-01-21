import { ClothesResolver } from './clothes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { Clothes } from './colthes.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([Clothes]),
  ],
  providers: [ClothesService, ClothesResolver]
})
export class ClothesModule {}
