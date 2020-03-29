import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientSchedulerModule } from './client-scheduler/client-scheduler.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AdminDomainModule } from './admin-domain/admin-domain.module';
import { ContactModule } from './contact/contact.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "blindbeez.ctoukcg6wilz.us-east-1.rds.amazonaws.com",
    "port": 5432,
    "username": "postgres",
    "password": "adminadmin",
    "database": "blindbeez",
    "entities": [
      "dist/**/*.entity{.ts,.js}"
    ],
    "synchronize": true
  }), ClientSchedulerModule, AdminDomainModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
