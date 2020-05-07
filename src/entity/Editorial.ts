import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("editoriales")
export class Editorial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 80, unique: true, nullable: false })
    nombre: string;
}