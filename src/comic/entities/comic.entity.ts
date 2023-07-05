import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    title: string;

    @Column()
    edition: number;

    @Column({ length: 25 })
    character: string;

    @Column({ length: 25 })
    author: string;

    @Column({default: false})
    rare: boolean;

    @Column()
    cover: string;
}
