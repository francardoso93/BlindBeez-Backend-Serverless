import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import { Massotherapist } from '../massotherapists/massotherapist.entity';
import { Company } from '../companies/company.entity';
import { Client } from '../clients/client.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  datetime?: Date;

  date?: string;
  time?: string;

  @OneToOne(type => Massotherapist)
  @JoinColumn()
  massotherapist?: Massotherapist;

  @ManyToOne(type => Company)
  @JoinColumn()
  company?: Company;

  @ManyToOne(type => Client)
  @JoinColumn()
  client?: Client;

  @Column()
  reserved: boolean;
}
