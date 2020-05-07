import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index} from "typeorm";
import { Fabricante } from "./Fabricante";

@Entity("tutoriales_pendientes")
export class TutorialPendiente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    @Index()
    titulo: string;

    @OneToOne(type => Fabricante)
    @JoinColumn()
    fabricante: Fabricante;
    
    @Column({ type: "text", nullable: true })
    observaciones: string;
}