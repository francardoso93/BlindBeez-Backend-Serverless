import { Injectable } from '@nestjs/common';
import { ClientScheduler } from './client-scheduler';

@Injectable()
export class ClientSchedulerService {
    //TODO: Implementar relações com o banco (Inspirar no Webhook)
    /**
     * save
     */
    public async save(clientScheduler: ClientScheduler): Promise<ClientScheduler[]> {
        return null;
    }

    public async read(id: string): Promise<ClientScheduler[]> {
        return null;
    }
}
