import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index} from "typeorm";
import { Tema } from "./Tema";
import { Editorial } from "./Editorial";
import { Idioma } from "./Idioma";

@Entity("libros")
export class Libro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    @Index()
    titulo: string;

    @Column({ type: "int", nullable: false })
    paginas: number;

    @Column({ type: "int", nullable: true })
    publicado: number;

    @Column({ type: "int", nullable: true })
    edicion: number;

    @OneToOne(type => Tema)
    @JoinColumn()
    tema: Tema;

    @OneToOne(type => Idioma)
    @JoinColumn()
    idioma: Idioma;

    @OneToOne(type => Editorial)
    @JoinColumn()
    editorial: Editorial;

    @Column({ type: "text", nullable: true })
    observaciones: string;
}