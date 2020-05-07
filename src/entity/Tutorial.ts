import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index} from "typeorm";
import { Tema } from "./Tema";
import { Fabricante } from "./Fabricante";
import { Idioma } from "./Idioma";

@Entity("tutoriales")
export class Tutorial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    @Index()
    titulo: string;

    @Column({ type: "int", nullable: false })
    duracion: number;

    @Column({ type: "varchar", nullable: false, length: 15 })
    actualizado: string;

    @OneToOne(type => Tema)
    @JoinColumn()
    tema: Tema;

    @OneToOne(type => Idioma)
    @JoinColumn()
    idioma: Idioma;

    @OneToOne(type => Fabricante)
    @JoinColumn()
    fabricante: Fabricante;
    
    @Column({ type: "text", nullable: true })
    observaciones: string;
}