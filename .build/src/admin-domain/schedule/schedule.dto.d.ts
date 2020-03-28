import { Massotherapist } from "../massotherapists/massotherapist.entity";
import { Company } from "../companies/company.entity";
import { Client } from "../clients/client.entity";
export declare class ScheduleDto {
    id?: number;
    date: string;
    time: string;
    massotherapist?: Massotherapist;
    company: Company;
    client?: Client;
    reserved: boolean;
}