import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Schedule } from "./schedule.entity";
import { Repository, DeleteResult } from "typeorm";
import { NewScheduleDto } from "./new-schedule.dto";

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>
  ) {}

  public async BulkCreateAvailableSchedules(newSchedule: NewScheduleDto){
    let currentDate = newSchedule.initialDate;
    let currentTime = newSchedule.initialTime;
    
    const schedule: Schedule = {
time: currentTime + int
    }

  }

  public async save(schedule: Schedule): Promise<Schedule> {
    return await this.scheduleRepository.save(schedule);
  }

  public async list(
    onlyAvailableTime: boolean,
    date: string,
  ): Promise<Schedule[]> {
    const whereCondition: any = {};
    if (onlyAvailableTime) {
      whereCondition.reserved = false;
    }
    if (date) {
      whereCondition.date = date;
    }
    return await this.scheduleRepository.find({
      where: whereCondition,
    });
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
    existingSchedule.time = schedule.time;
    return await this.save(existingSchedule);
  }
}
