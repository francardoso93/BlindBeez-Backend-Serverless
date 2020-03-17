import { Company } from '../admin-domain/companies/company.entity';

export class ClientSchedulerDto {
    id: number; // Id da schedule
    name: string;
    email: string;
    companyId: number;
}
