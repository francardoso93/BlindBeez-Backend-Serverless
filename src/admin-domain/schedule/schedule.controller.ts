import { Controller, Get, HttpCode, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { Schedule } from './schedule.entity';
import { ScheduleService } from './schedule.service';
import { NewScheduleDto } from './new-schedule.dto';

@Controller('schedules')
export class ScheduleController {
    constructor(
        private scheduleService: ScheduleService,
    ) { }

    // TODO: Pipe validação de entrada
    //Usando POST para criação de novas agendas disponíveis. o PUT vai servir para trocar o status. 
    //Ou seja, o formulário do front vai usar ou esse PUT ou o esquema do client-scheduler (Prefiro a primeira opção)
    //O PUT também vai precisar sortear quem será o massoterapeuta disponível
    //No endpoint de massoterapeutas vou precisar cadastrar as agendas deles para conseguir fazer esse cruzamento
    @Post()
    @HttpCode(201)
    async post(@Body() body: NewScheduleDto) {
        // if (body = await this.scheduleService.save(body)) {
        //     return body;
        // }
    }

    @Get()
    @HttpCode(200)
    async list(@Query() params) {
        return await this.scheduleService.list(params.onlyAvailableTime, params.date);
    }

    @Get(":id")
    @HttpCode(200)
    async get(@Param() params) {
        return await this.scheduleService.get(params.id);
    }

    @Put(":id")
    @HttpCode(200)
    async put(@Param() params, @Body() body: Schedule) {
        return await this.scheduleService.update(params.id, body);
    }

    @Delete(":id")
    @HttpCode(200)
    async delete(@Param() params) {
        return await this.scheduleService.delete(params.id);
    }
}
