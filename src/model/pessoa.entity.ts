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

  @Column()
  nome: string;

  @Column()
  datanascimento: string;

  @Column({ length: 20, unique: true })
  cpf: string;

  @Column({ type:"float" })
  peso: number;

  @Column({ type:"float" })
  altura: number;

  @Column()
  sexo: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => IMC, imc => imc.pessoa)
  imc: IMC[];

}
