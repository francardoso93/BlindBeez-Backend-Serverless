import { Controller, Body, Res, Get, Post, HttpCode, Param } from '@nestjs/common';
import { ClientSchedulerDto } from './client-scheduler.dto';
import { ClientSchedulerService } from './client-scheduler.service';

@Controller('client-scheduler')
export class ClientSchedulerController {
    constructor(
        private clientSchedulerService: ClientSchedulerService,
    ) { }

    // TODO: Pipe validação de entrada
    @Post()
    @HttpCode(201)
    async post(@Body() body: ClientSchedulerDto) {
        // body = await this.clientSchedulerService.save(body);
        // if (body) {
        //     return body;
        // }
    }
}
