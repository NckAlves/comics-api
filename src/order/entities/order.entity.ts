import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    owner: string; //Quem pediu

    @Column()
    comicTitle: string;

    @Column()
    couponHash: string;
}
