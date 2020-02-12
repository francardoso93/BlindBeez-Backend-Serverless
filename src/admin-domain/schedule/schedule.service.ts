import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Schedule } from "./schedule.entity";
import { Repository, DeleteResult } from "typeorm";

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}
  public async save(company: Schedule): Promise<Schedule> {
    return await this.scheduleRepository.save(company);
  }

  public async list(): Promise<Schedule[]> {
    return await this.scheduleRepository.find({
      where: {
        reserved: false,
      },
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
