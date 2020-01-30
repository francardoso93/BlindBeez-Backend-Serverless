import { Module } from '@nestjs/common';
import { ClientSchedulerController } from './client-scheduler.controller';
import { ClientSchedulerService } from './client-scheduler.service';
import { AdminDomainModule } from '../admin-domain/admin-domain.module';

@Module({
  imports:[AdminDomainModule],
  controllers: [ClientSchedulerController],
  providers: [ClientSchedulerService]
})
export class ClientSchedulerModule {}
