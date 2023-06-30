import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Model, Table, HasMany } from 'sequelize-typescript';


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

    // @HasMany(() => Coupns)
    // coupons: Coupon[];
}
