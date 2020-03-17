import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientSchedulerDto } from './client-scheduler.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Exclusion } from 'typeorm';
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
            let client: Client = await this.clientRepository.findOne({
                where: [
                    {
                        email: clientScheduler.email,
                    },
                ],
            });

            if (!client) {
                client = {
                    id: 0, //TODO: Buscar pelo email para verificar se já existe aquele cliente
                    name: clientScheduler.name,
                    email: clientScheduler.email,
                    // company: {
                    //     id: clientScheduler.companyId,
                    // },
                };
                client = await this.clientRepository.save(client);
            }

            const schedule: Schedule = await this.scheduleRepository.findOne(clientScheduler.id);
            if (schedule) {
                schedule.reserved = true;
                schedule.client = client;
                //TODO: schedule.massotherapist = // sort
                this.scheduleRepository.save(schedule); //TODO: QueryFailedError: duplicate key value violates unique constraint "REL_3d81c1bcc9ffe860e54edf97dc" 
                //Provavel que esse erro esteja ocorrendo ao tentar relacionar o mesmo cliente a varias agendas
            }
            else {
                throw new NotFoundException("Não foi possivel localizar a agenda informada")
            }

            return clientScheduler;
        } catch (ex) {
            console.error(ex);
            throw ex;
        }
    }
}
