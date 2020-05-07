import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index} from "typeorm";
import { Editorial } from "./Editorial";

@Entity("libros_pendientes")
export class Libro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    @Index()
    titulo: string;

    @OneToOne(type => Editorial)
    @JoinColumn()
    editorial: Editorial;

    @Column({ type: "text", nullable: true })
    observaciones: string;
}