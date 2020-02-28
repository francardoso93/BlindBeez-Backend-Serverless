import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from './schedule.entity';
import { Repository, DeleteResult, Like, Raw, Between } from 'typeorm';
import { NewScheduleDto } from './new-schedule.dto';
import moment = require('moment');

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>
  ) { }

  public async BulkCreateAvailableSchedules(newSchedule: NewScheduleDto) {
    let currentMoment = new Date(newSchedule.initialDate);
    const endDate = new Date(newSchedule.finalDate);

    while (currentMoment < endDate) {
      currentMoment = moment(currentMoment)
        .add(newSchedule.minuteInterval, 'minutes')
        .toDate();
      const schedule: Schedule = {
        company: newSchedule.company,
        datetime: currentMoment,
        reserved: false,
      };
      this.save(schedule);
    }
  }

  public async save(schedule: Schedule): Promise<Schedule> {
    //TODO: Proteção para não criar agendas duplicadas: 
    //https://stackoverflow.com/questions/46745688/typeorm-upsert-create-if-not-exist 
    return await this.scheduleRepository.save(schedule);
  }

  public async list(
    onlyAvailableTime: boolean,
    date: string,
    companyId: string,
    splitTime: boolean,
  ): Promise<Schedule[]> {

    const whereCondition: any = {};
    if (onlyAvailableTime) {
      whereCondition.reserved = false;
    }
    if (date) {
      // TODO: Está trazendo tudo com 3h de diferença (Timezone diferente)
      whereCondition.datetime = Between(date + 'T00:00:00', date + 'T23:59:59');
    }
    if (companyId) {
      whereCondition.company = {
        id: companyId,
      };
    }
    const scheduleList = await this.scheduleRepository.find(
      {
        where: [whereCondition],
        order: {
          datetime: 'ASC',
        },
      });
    if (splitTime) {
      scheduleList.map(a => {
        a.date = moment(a.datetime).utc().format('YYYY-MM-DD');
        a.time = moment(a.datetime).utc().format('HH:mm:ss');
      });
    }
    return scheduleList;
  }

  public async get(id: string): Promise<Schedule> {
    return await this.scheduleRepository.findOne(id);
  }

  public async delete(id: string): Promise<DeleteResult> {
    return await this.scheduleRepository.delete(id);
  }

  public async update(id: string, schedule: Schedule): Promise<Schedule> {
    const existingSchedule = await this.get(id);
    existingSchedule.client = schedule.client;
    existingSchedule.company = schedule.company;
    existingSchedule.datetime = schedule.datetime;
    existingSchedule.massotherapist = schedule.massotherapist;
    existingSchedule.reserved = schedule.reserved;
    return await this.save(existingSchedule);
  }
}
