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
                id: 0, //TODO: Buscar pelo email para verificar se já existe aquele cliente
                name: clientScheduler.name,
                email: clientScheduler.email,
                company: clientScheduler.company,
            };
            client = await this.clientRepository.save(client);

            // TODO: Entender como dizer ao 
            var schedule: Schedule = {
                id: clientScheduler.id,
                client: client,
                // TODO: Sort Massotherapist
                // massotherapist: clientScheduler.massotherapist,
                reserved: true,
            }
            this.scheduleRepository.save(schedule);

            return clientScheduler;
        }
        catch (ex) {
            console.error(ex);
            throw ex;
        }
    }
}
