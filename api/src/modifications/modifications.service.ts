import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ModificationModel } from './modification.model';

import { CreateModificationDto } from './dto/create-modification.dto'
import { Modification } from 'types/modification';

@Injectable()
export class ModificationsService {
	constructor(@InjectModel(ModificationModel) private modificationsRepository: typeof ModificationModel) {}

	async createModification(dto: CreateModificationDto): Promise<Modification> {
		const modification = await this.modificationsRepository.create(dto)
		return modification
	}

	async getModificationsOfCar(car_ID: number): Promise<Modification[]> {
		const modifications = await this.modificationsRepository.findAll({where: {car_ID}})
		return modifications
	}
}
