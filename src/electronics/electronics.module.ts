import { Module } from '@nestjs/common';
import { ElectronicsResolver } from './electronics.resolver';
import { ElectronicsService } from './electronics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Electronics } from './electronics.entity';

@Module({

    imports: [
      TypeOrmModule.forFeature([Electronics]),
    ],
    providers: [ElectronicsResolver,ElectronicsService,]
})
export class ElectronicsModule {}
