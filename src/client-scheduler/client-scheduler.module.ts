import { Module } from '@nestjs/common';
import { ClientSchedulerController } from './client-scheduler.controller';
import { ClientSchedulerService } from './client-scheduler.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientScheduler } from './client-scheduler.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ClientScheduler])],
  controllers: [ClientSchedulerController],
  providers: [ClientSchedulerService]
})
export class ClientSchedulerModule {}
