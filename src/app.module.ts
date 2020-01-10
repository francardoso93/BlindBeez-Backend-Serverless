import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientSchedulerModule } from './client-scheduler/client-scheduler.module';

@Module({
  imports: [ClientSchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
