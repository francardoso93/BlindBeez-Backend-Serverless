import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Massotherapist } from '../massotherapists/massotherapist.entity';
import { Company } from '../companies/company.entity';
import { Client } from '../clients/client.entity';

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    //TODO: Reflexão: duas colunas separadas mesmo ou datetime? ****
    @Column()
    date: string;

    @Column()
    time: string;
  
    @OneToOne(type => Massotherapist)
    @JoinColumn()
    massotherapist: Massotherapist;
    
    @OneToOne(type => Company)
    @JoinColumn()
    company: Company;      
    
    @OneToOne(type => Client)
    @JoinColumn()
    client: Client;

    @Column()
    reserved: boolean;
}
