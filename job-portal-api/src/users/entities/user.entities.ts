import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User{

    @PrimaryGeneratedColumn() id :number;

    @Column() email: string;

    @Column() Password: string;

    @Column({default: 'applicant'}) role: string;
}