import { Company } from "../admin-domain/companies/company.entity";
import { Massotherapist } from "../admin-domain/massotherapists/massotherapist.entity";

export class ClientSchedulerDto {
    name: string;    
    email: string;    
    company: Company;    
    date: Date;    
    massotherapist: Massotherapist;    
    time: string;
}
