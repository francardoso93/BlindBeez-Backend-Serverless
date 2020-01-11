import { Controller, Body, Res, Get, Post, HttpCode, Param } from '@nestjs/common';
import { ClientSchedulerDto } from './client-scheduler.dto';
// import { ClientSchedulerService } from './client-scheduler.service';

@Controller('client-scheduler')
export class ClientSchedulerController {
    constructor(
        // private clientSchedulerService: ClientSchedulerService
    ) { }

    @Get()
    async findAll() {
        // let scheduleList; 
        // if (scheduleList = await this.clientSchedulerService.findAll()) { 
        //     return scheduleList;
        // }
    }

    @Get(':id')
    async findOne(@Param() params) {
        // let scheduleItem; 
        // if (scheduleItem = await this.clientSchedulerService.read(params.id))  { 
        //     return scheduleItem;
        // }
    }

    //TODO: Pipe validação de entrada
    @Post()
    @HttpCode(201)
    async post(@Body() body: ClientSchedulerDto) {
        // if (this.clientSchedulerService.save(body)) {
        //     return await this.clientSchedulerService.read(body.id);
        // }
    }
}
