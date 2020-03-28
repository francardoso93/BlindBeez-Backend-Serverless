import { Schedule } from './schedule.entity';
import { Repository, DeleteResult } from 'typeorm';
import { NewScheduleDto } from './new-schedule.dto';
import { ScheduleDto } from './schedule.dto';
import { Moment } from 'moment';
export declare class ScheduleService {
    private readonly scheduleRepository;
    constructor(scheduleRepository: Repository<Schedule>);
    BulkCreateAvailableSchedules(newSchedule: NewScheduleDto): Promise<void>;
    getTime(dateTime: Moment): Moment;
    save(schedule: Schedule): Promise<Schedule>;
    list(onlyAvailableTime: boolean, date: string, companyId: string): Promise<ScheduleDto[]>;
    get(id: string): Promise<Schedule>;
    delete(id: string): Promise<DeleteResult>;
    update(id: string, schedule: Schedule): Promise<Schedule>;
}
