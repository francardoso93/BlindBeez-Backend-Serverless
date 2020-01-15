import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Company } from '../companies/company.entity';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(type => Company, Company => Company.clients)
    company: Company;

}
