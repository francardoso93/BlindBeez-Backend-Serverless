import { ClientSchedulerDto } from './client-scheduler.dto';
import { ClientSchedulerService } from './client-scheduler.service';
export declare class ClientSchedulerController {
    private clientSchedulerService;
    constructor(clientSchedulerService: ClientSchedulerService);
    post(body: ClientSchedulerDto): Promise<ClientSchedulerDto | undefined>;
}
