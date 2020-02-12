import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Client } from '../clients/client.entity';

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Client, Client => Client.company)
    clients: Client[];
}
