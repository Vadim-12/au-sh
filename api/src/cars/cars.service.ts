import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Car } from 'types/car';
import { CarModel } from './car.model';

import { CreateCarDto } from './dto/create-car.dto'

@Injectable()
export class CarsService {
	constructor(@InjectModel(CarModel) private carsRepository: typeof CarModel) {}

	async createCar(dto: CreateCarDto): Promise<Car> {
		const car = await this.carsRepository.create(dto)
		return car
	}

	async getAllCars(): Promise<Car[]> {
		const cars = await this.carsRepository.findAll()
		return cars
	}
}
