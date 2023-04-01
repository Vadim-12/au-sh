import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ModificationsService } from './modifications.service';
import { CreateModificationDto } from './dto/create-modification.dto';
import { Modification } from 'types/modification';

@Controller('modifications')
export class ModificationsController {
  constructor(private readonly modificationsService: ModificationsService) {}

  @Get(':id')
  getModificationsOfCar(@Param('id') car_ID: number): Promise<Modification[]> {
    return this.modificationsService.getModificationsOfCar(car_ID)
  }

  @Post('create')
  createModification(@Body() modificationDto: CreateModificationDto) {
    return this.modificationsService.createModification(modificationDto)
  }
}
