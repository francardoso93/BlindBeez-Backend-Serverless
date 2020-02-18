import { Injectable } from '@nestjs/common';
import { Schedule } from '../schedule/schedule.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AvailableDaysService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  public async list() {
    const availableDays = await this.scheduleRepository
      .createQueryBuilder('Schedule')
      .select('DISTINCT ("date")')
      .getRawMany();
    return availableDays;
  }
}
