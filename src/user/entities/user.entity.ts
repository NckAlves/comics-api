import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { Coupon } from 'src/coupon/entities/coupon.entity';

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
    @JoinColumn()
    orders: Order[]

    @ManyToMany(() => Coupon, { eager: true })
    @JoinTable()
    coupons: Coupon[]
}
