import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'nestjs-config';
import { TypeOrmConfigService } from './config/database';
import * as path from 'path';
import { ClientSchedulerModule } from './client-scheduler/client-scheduler.module';
import { AdminDomainModule } from './admin-domain/admin-domain.module';
import { ContactModule } from './contact/contact.module';
import { Massotherapist } from './admin-domain/massotherapists/massotherapist.entity';
import { Company } from './admin-domain/companies/company.entity';
import { Client } from './admin-domain/clients/client.entity';
import { Schedule } from './admin-domain/schedule/schedule.entity';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync(
      {
        inject: [ConfigModule],
        useClass: TypeOrmConfigService,
      }), ClientSchedulerModule, AdminDomainModule, ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
