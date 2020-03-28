import { Company } from './company.entity';
import { CompaniesService } from './companies.service';
export declare class CompaniesController {
    private companiesService;
    constructor(companiesService: CompaniesService);
    post(body: Company): Promise<Company | undefined>;
    list(): Promise<Company[]>;
    get(params: any): Promise<Company>;
    put(params: any, body: Company): Promise<Company>;
    delete(params: any): Promise<import("typeorm").DeleteResult>;
}
