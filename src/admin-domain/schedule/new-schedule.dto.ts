import { Company } from "../companies/company.entity";

export class NewScheduleDto {
    company: Company;
    initialDate: string;
    initialTime: string;
    finalTime: string;
    finalDate: string;
    minuteInterval: string;
}