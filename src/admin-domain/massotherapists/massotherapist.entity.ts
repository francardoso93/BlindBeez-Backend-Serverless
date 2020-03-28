import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Massotherapist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
