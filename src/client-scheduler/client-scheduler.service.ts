import { Injectable } from '@nestjs/common';
import { ClientSchedulerDto } from './client-scheduler.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../admin-domain/clients/client.entity';
import { Schedule } from '../admin-domain/schedule/schedule.entity';

@Injectable()
export class ClientSchedulerService {
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>,
        @InjectRepository(Schedule)
        private readonly scheduleRepository: Repository<Schedule>,
    ) { }

    public async save(clientScheduler: ClientSchedulerDto): Promise<ClientSchedulerDto> {
        // TODO: Transacionar?
        try {
            var client: Client = {
                id: 0,
                name: clientScheduler.name,
                email: clientScheduler.email,
                company: clientScheduler.company,
            };
            client = await this.clientRepository.save(client);

            var schedule: Schedule = {
                id: 0,                
                client: client,
                company: clientScheduler.company,
                date: clientScheduler.date,
                massotherapist: clientScheduler.massotherapist,
                reserved: true,
                time: clientScheduler.time,
            }
            this.scheduleRepository.save(schedule);

            return clientScheduler;
        }
        catch (ex) {
            console.error(ex);
            throw ex;
        }
    }
    // async findAll(): Promise<ClientScheduler[]> {
    //     return this.clientRepository.find();
    // }
    // public async read(id: number): Promise<ClientScheduler> {
    //     return this.clientRepository.findOne(id);
    // }
}
