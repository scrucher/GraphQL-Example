import { Clothes } from './clothes/colthes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ElectronicsModule } from './electronics/electronics.module';
import { Electronics } from './electronics/electronics.entity';
import { ClothesModule } from './clothes/clothes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/nest',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Electronics, Clothes
      ]

    }),
    
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      installSubscriptionHandlers: true,   
    }),

    ElectronicsModule,

    ClothesModule
  ]
})
  
export class AppModule {}
