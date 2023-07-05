import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    name: string;

    @Column({length: 30})
    email: string;

    @Column()
    password: string;

    @OneToMany(type => Order, order => order.owner)
    orders: Order[]
}
