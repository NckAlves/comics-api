import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coupon {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    raro: boolean;
}
