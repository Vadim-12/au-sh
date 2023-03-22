import Admin from 'types/admin';
import { AdminModel } from './admin.model';
import { CreateAdminDto } from './dto/create-admin.dto';
export declare class AdminService {
    private adminRepository;
    constructor(adminRepository: typeof AdminModel);
    create(dto: CreateAdminDto): Promise<Admin>;
    getAllAdmins(): Promise<Admin[]>;
}
