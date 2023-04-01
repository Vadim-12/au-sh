import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from 'types/admin';
import { AdminModel } from './admin.model';

import { CreateAdminDto } from './dto/create-admin.dto'

@Injectable()
export class AdminService {
	constructor(@InjectModel(AdminModel) private adminRepository: typeof AdminModel) {}

	async createAdmin(dto: CreateAdminDto): Promise<Admin> {
		const admin = await this.adminRepository.create(dto)
		return admin
	}

	async getAllAdmins(): Promise<Admin[]> {
		const admins = await this.adminRepository.findAll()
		return admins
	}
}
