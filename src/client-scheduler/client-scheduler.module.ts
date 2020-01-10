import { Module } from '@nestjs/common';
import { ClientSchedulerController } from './client-scheduler.controller';
import { ClientSchedulerService } from './client-scheduler.service';

@Module({
  controllers: [ClientSchedulerController],
  providers: [ClientSchedulerService]
})
export class ClientSchedulerModule {}
