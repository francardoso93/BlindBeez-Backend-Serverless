import { Controller, Get, HttpCode, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Company } from './company.entity';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
    constructor(
        private companiesService: CompaniesService
    ) { }

    //TODO: Pipe validação de entrada
    @Post()
    @HttpCode(201)
    async post(@Body() body: Company) {
        if (body = await this.companiesService.save(body)) {
            return body;
        }
    }

    @Get()
    @HttpCode(200)
    async list() {
        return await this.companiesService.list();
    }

    @Get(":id")
    @HttpCode(200)
    async get(@Param() params) {
        return await this.companiesService.get(params.id);            
    }

    @Put(":id")
    @HttpCode(200)
    async put(@Param() params, @Body() body: Company) {
        return await this.companiesService.update(params.id, body);        
    }

    @Delete(":id")
    @HttpCode(200)
    async delete(@Param() params) {
        return await this.companiesService.delete(params.id);
    }
}
