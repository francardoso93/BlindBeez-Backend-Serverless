import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Company } from '../companies/company.entity';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    email: string;
    
    // @OneToOne(type => Company)
    // @JoinColumn()
    // company: Company;  
}
