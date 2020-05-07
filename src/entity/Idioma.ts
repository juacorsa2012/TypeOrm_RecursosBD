import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("idiomas")
export class Idioma {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 40, unique: true, nullable: false })
    nombre: string;
}