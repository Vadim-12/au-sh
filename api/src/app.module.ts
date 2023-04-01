import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminModel } from './admin/admin.model';
import { AdminModule } from './admin/admin.module';
import { CarsModule } from './cars/cars.module';
import { ModificationsModule } from './modifications/modifications.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [AdminModel],
      autoLoadModels: true
    }),
    AdminModule,
    CarsModule,
    ModificationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
