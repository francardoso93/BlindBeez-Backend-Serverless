import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Schedule } from "./schedule.entity";
import { Repository, DeleteResult } from "typeorm";
import { NewScheduleDto } from "./new-schedule.dto";
import { Moment } from "moment";
import moment = require("moment");

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>
  ) {}

  public async BulkCreateAvailableSchedules(newSchedule: NewScheduleDto) {
    let currentMoment = new Date(newSchedule.initialDate);
    const endDate = new Date(newSchedule.finalDate);

    while (currentMoment < endDate) {
      currentMoment = moment(currentMoment)
        .add(newSchedule.minuteInterval, 'minutes')
        .toDate();
      const schedule: Schedule = {
        company: newSchedule.company,
        date: currentMoment,
        reserved: false,
      };
      this.save(schedule);
    }
  }

  public async save(schedule: Schedule): Promise<Schedule> {
    return await this.scheduleRepository.save(schedule);
  }

  //TODO: Avaliar impacto da mudança do sistema para utilização do Date ao inves de string
  public async list(
    onlyAvailableTime: boolean,
    date: string,
    companyId: string
  ): Promise<Schedule[]> {
    const whereCondition: any = {};
    if (onlyAvailableTime) {
      whereCondition.reserved = false;
    }
    if (date) {
      whereCondition.date = date;
    }
    if (companyId) {
      whereCondition.company = {
        id: companyId
      };
    }
    return await this.scheduleRepository.find(whereCondition);
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
    existingSchedule.date = schedule.date;
    existingSchedule.massotherapist = schedule.massotherapist;
    existingSchedule.reserved = schedule.reserved;
    return await this.save(existingSchedule);
  }
}
