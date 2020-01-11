import { Injectable } from '@nestjs/common';
import { ClientScheduler } from './client-scheduler.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientSchedulerService {
    constructor(
        @InjectRepository(ClientScheduler)
        private readonly clientRepository: Repository<ClientScheduler>,
    ) { }

    async findAll(): Promise<ClientScheduler[]> {
        return this.clientRepository.find();
    }

    public async save(clientScheduler: ClientScheduler): Promise<ClientScheduler>  {
        return this.clientRepository.save(clientScheduler);
    }

    public async read(id: number): Promise<ClientScheduler> {
        return this.clientRepository.findOne(id);
    }
}
