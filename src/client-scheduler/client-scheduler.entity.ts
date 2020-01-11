import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClientScheduler {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    company: string;
    
    @Column()
    date: string;
    
    @Column()
    massotherapist: string;
    
    @Column()
    time: string;
}
