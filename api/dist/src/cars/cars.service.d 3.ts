import { Car } from 'types/car';
import { CarModel } from './car.model';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarsService {
    private carsRepository;
    constructor(carsRepository: typeof CarModel);
    createCar(dto: CreateCarDto): Promise<Car>;
    getAllCars(): Promise<Car[]>;
}
