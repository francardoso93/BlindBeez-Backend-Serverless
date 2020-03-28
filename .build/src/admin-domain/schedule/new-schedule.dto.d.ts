import { Company } from '../companies/company.entity';
export declare class NewScheduleDto {
    company: Company;
    initialDate: Date;
    finalDate: Date;
    minuteInterval: string;
}
