import { Schedule } from './schedule.entity';
import { ScheduleService } from './schedule.service';
import { NewScheduleDto } from './new-schedule.dto';
export declare class ScheduleController {
    private scheduleService;
    constructor(scheduleService: ScheduleService);
    post(body: NewScheduleDto): Promise<void>;
    list(params: any): Promise<import("./schedule.dto").ScheduleDto[]>;
    get(params: any): Promise<Schedule>;
    put(params: any, body: Schedule): Promise<Schedule>;
    delete(params: any): Promise<import("typeorm").DeleteResult>;
}
