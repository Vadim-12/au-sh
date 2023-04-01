import { ModificationModel } from './modification.model';
import { CreateModificationDto } from './dto/create-modification.dto';
import { Modification } from 'types/modification';
export declare class ModificationsService {
    private modificationsRepository;
    constructor(modificationsRepository: typeof ModificationModel);
    createModification(dto: CreateModificationDto): Promise<Modification>;
    getModificationsOfCar(car_ID: number): Promise<Modification[]>;
}
