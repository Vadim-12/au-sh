import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getAllAdmins() {
    return this.adminService.getAllAdmins()
  }

  @Post('create')
  createAdmin(@Body() adminDto: CreateAdminDto) {
    return this.adminService.createAdmin(adminDto)
  }
}
