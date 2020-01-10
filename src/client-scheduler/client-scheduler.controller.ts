import { Controller, Post, UsePipes, ValidationPipe, Body, Res, BadRequestException } from '@nestjs/common';
import { ClientScheduler } from './client-scheduler';
import { ClientSchedulerService } from './client-scheduler.service';

@Controller('client-scheduler')
export class ClientSchedulerController {
    constructor(
        private clientSchedulerService: ClientSchedulerService
    ) { }

    @Post()
    async post(@Body() body: ClientScheduler, @Res() response): Promise<void> {
        if (await this.clientSchedulerService.save(body)) { // Adiciona subscrição no banco de dados
            response.status(201).send(await this.clientSchedulerService.read(body.id));
         } 
        //  else {
        //     throw new BadRequestException(this.sub.getError());
        // }
    }
}
