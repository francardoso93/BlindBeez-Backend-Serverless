import { Company } from "./company.entity";
import { Repository, DeleteResult } from "typeorm";
export declare class CompaniesService {
    private readonly companyRepository;
    constructor(companyRepository: Repository<Company>);
    save(company: Company): Promise<Company>;
    list(): Promise<Company[]>;
    get(id: string): Promise<Company>;
    delete(id: string): Promise<DeleteResult>;
    update(id: string, company: Company): Promise<Company>;
}
