import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ModificationsController } from './modifications.controller';
import { ModificationModel } from './modification.model';
import { ModificationsService } from './modifications.service';

@Module({
  controllers: [ModificationsController],
  providers: [ModificationsService],
  imports: [
    SequelizeModule.forFeature([ModificationModel])
  ]
})
export class ModificationsModule {}
