import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarsController } from './cars.controller';
import { CarModel } from './car.model';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports: [
    SequelizeModule.forFeature([CarModel])
  ]
})
export class CarsModule {}
