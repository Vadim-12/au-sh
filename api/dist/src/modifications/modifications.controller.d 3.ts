import { ModificationsService } from './modifications.service';
import { CreateModificationDto } from './dto/create-modification.dto';
import { Modification } from 'types/modification';
export declare class ModificationsController {
    private readonly modificationsService;
    constructor(modificationsService: ModificationsService);
    getModificationsOfCar(car_ID: number): Promise<Modification[]>;
    createModification(modificationDto: CreateModificationDto): Promise<Modification>;
}
