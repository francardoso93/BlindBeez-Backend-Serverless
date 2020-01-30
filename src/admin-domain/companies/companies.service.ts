import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class CompaniesService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>,
    ) { }

    public async get(id: string): Promise<Company> {
        return await this.companyRepository.findOne(id);
    }
    public async list(): Promise<Company[]> {
        return await this.companyRepository.find();
    }

    public async save(company: Company): Promise<Company> {
        return await this.companyRepository.save(company);
    }

    public async delete(id: string): Promise<DeleteResult> {
        return await this.companyRepository.delete(id);
    }

    public async update(id: string, company: Company): Promise<Company> {
        var existingCompany = await this.get(id);
        existingCompany.name = company.name;
        return await this.save(existingCompany);
    }
}
