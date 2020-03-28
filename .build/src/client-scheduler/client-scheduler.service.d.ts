import { ClientSchedulerDto } from './client-scheduler.dto';
import { Repository } from 'typeorm';
import { Client } from '../admin-domain/clients/client.entity';
import { Schedule } from '../admin-domain/schedule/schedule.entity';
export declare class ClientSchedulerService {
    private readonly clientRepository;
    private readonly scheduleRepository;
    constructor(clientRepository: Repository<Client>, scheduleRepository: Repository<Schedule>);
    save(clientScheduler: ClientSchedulerDto): Promise<ClientSchedulerDto>;
}
