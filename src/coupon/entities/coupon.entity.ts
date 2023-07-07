import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Coupon {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    rare: boolean;

    @Column()
    hash: string;
}
