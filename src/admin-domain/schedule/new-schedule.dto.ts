import { Company } from '../companies/company.entity';

export class NewScheduleDto {
    company: Company;
    initialDate: Date;
    finalDate: Date;
    minuteInterval: string;
}