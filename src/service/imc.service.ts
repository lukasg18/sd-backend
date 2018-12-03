import { Injectable, Inject } from '@nestjs/common';
import { IMC } from '../model/imc.entity';

@Injectable()
export class IMCService{
  async readAll(): Promise<IMC [] | any> {
    return IMC.find();
  }

  async readOne(id: number): Promise<IMC | any> {
    return IMC.findOne({ idimc: id });
  }

  async Create(body: any): Promise<IMC> {
    let pessoa = new IMC();
    try {
      pessoa.pessoa = body.ispessoa;
      pessoa.valorimc = body.valorimc;
      pessoa.data = body.data;
      return await IMC.save(pessoa);
    } catch (err) {
      throw new Error(
        `Erro ao salvar IMC \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<IMC> {
    let busca;
    try {
      busca = await IMC.findOne({
        idimc: body.idpessoa,
      });
      return await IMC.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar IMC \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<IMC> {
    try {
      let busca = await IMC.findOne({
        idimc: body.idpessoa,
      });
      busca.valorimc = body.imc;
      return await IMC.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar IMC \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
