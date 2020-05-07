import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("fabricantes")
export class Fabricante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 80, unique: true, nullable: false })
    nombre: string;
}