import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): Promise<import("../../types/car").Car[]>;
    createCar(carDto: CreateCarDto): Promise<import("../../types/car").Car>;
}
