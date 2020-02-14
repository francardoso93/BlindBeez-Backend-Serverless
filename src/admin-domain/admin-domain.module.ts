import { Module } from '@nestjs/common';
import { CompaniesController } from './companies/companies.controller';
import { ScheduleController } from './schedule/schedule.controller';
import { MassotherapistsController } from './massotherapists/massotherapists.controller';
import { ClientsController } from './clients/clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/client.entity';
import { Company } from './companies/company.entity';
import { Massotherapist } from './massotherapists/massotherapist.entity';
import { Schedule } from './schedule/schedule.entity';
import { CompaniesService } from './companies/companies.service';
import { ScheduleService } from './schedule/schedule.service';
import { AvailableDaysController } from './available-days/available-days.controller';
import { AvailableDaysService } from './available-days/available-days.service';

@Module({
  imports:[TypeOrmModule.forFeature([Client, Company, Massotherapist, Schedule])],
  controllers: [CompaniesController, ScheduleController, MassotherapistsController, ClientsController, AvailableDaysController],
  exports: [TypeOrmModule],
  providers: [CompaniesService, ScheduleService, AvailableDaysService],
})
export class AdminDomainModule {}
