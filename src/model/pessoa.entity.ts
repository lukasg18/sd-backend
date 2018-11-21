import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { IMC } from './imc.entity';

@Entity()
export class Pessoa extends BaseEntity {
  @PrimaryGeneratedColumn()
  idpessoa: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ nullable: false })
  datanascimento: string;

  @Column({ nullable: false, length: 12, unique: true })
  cpf: string;

  @Column({ nullable: false})
  peso: number;

  @Column({ nullable: false})
  altura: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => IMC, imc => imc.pessoa)
  imc: IMC[];

}
