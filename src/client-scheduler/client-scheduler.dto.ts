import { Company } from "../admin-domain/companies/company.entity";
import { Massotherapist } from "../admin-domain/massotherapists/massotherapist.entity";

export class ClientSchedulerDto {
    id: number;
    name: string;    
    email: string;    
    company: Company;    
    date: Date;    
}
