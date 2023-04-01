import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.getAllCars()
  }

  @Post('create')
  createCar(@Body() carDto: CreateCarDto) {
    return this.carsService.createCar(carDto)
  }
}
