import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Coupon } from 'src/coupon/entities/coupon.entity';
import { Comic } from 'src/comic/entities/comic.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.orders, { eager: true })
    // @JoinColumn()
    owner: string; //Quem pediu

    @Column()
    comicTitle: string;

    @Column()
    couponHash: string;
}