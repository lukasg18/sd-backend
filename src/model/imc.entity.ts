import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';

@Entity()
export class IMC extends BaseEntity {
  @PrimaryGeneratedColumn()
  idpessoa: number;

  @Column({ length: 100 })
  valorimc: string;

  @Column({ nullable: false })
  data: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Pessoa, pessoa => pessoa.imc, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idpessoa' })
  pessoa: Pessoa;

}
