import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from '../model/pessoa.entity';
import { IMC } from '../model/imc.entity';

@Injectable()
export class PessoaService{
  async readAll(): Promise<Pessoa[] | any> {
    return Pessoa.find();
  }

  async readOne(id: number): Promise<Pessoa | any> {
    return Pessoa.findOne({ idpessoa: id });
  }

  async Create(body: any): Promise<any> {
    let pessoa = new Pessoa();
    let busca;
    let data = new Date();
    let imc = new IMC();
    let resultado;
    try {
      pessoa.nome = body.nome;
      pessoa.peso = body.peso;
      pessoa.cpf = body.cpf;
      pessoa.sexo = body.sexo;
      pessoa.datanascimento = body.datanascimento;
      pessoa.altura = body.altura;
      await Pessoa.save(pessoa);

      busca = await Pessoa.findOne({ cpf: body.cpf })

      resultado = (body.peso/((body.altura)**2));
      imc.pessoa = busca.idpessoa;
      imc.valorimc = resultado;
      imc.data = String(data);
      return await IMC.save(imc)
    } catch (err) {
      throw new Error(
        `Erro ao salvar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Pessoa> {
    let busca;
    try {
      busca = await Pessoa.findOne({
        cpf: body.cpf,
      });
      return await Pessoa.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<Pessoa> {
    try {
      let busca = await Pessoa.findOne({
        cpf: body.cpf,
      });
      busca.cpf = body.novoregistro;
      return await Pessoa.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
