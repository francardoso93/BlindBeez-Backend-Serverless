import { Injectable } from '@nestjs/common';
import { ScheduleService } from '../schedule/schedule.service';

@Injectable()
export class AvailableDaysService {
    constructor(private scheduleService: ScheduleService ) { }

    public async list() {
        const availableDays = this.scheduleService.list(true, null);
    //https://stackoverflow.com/questions/54666465/typeorm-queryrunner-select-distinct
    }
}
