import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getAllAdmins(): Promise<import("../../types/admin").Admin[]>;
    createAdmin(adminDto: CreateAdminDto): Promise<import("../../types/admin").Admin>;
}
