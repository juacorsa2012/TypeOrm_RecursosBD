import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("temas")
export class Tema {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 40, unique: true, nullable: false })
    nombre: string;
}