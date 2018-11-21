import { Module } from '@nestjs/common';
import { databaseProviders } from './database/database.providers';
import { PessoaController } from './controller/pessoa.controller';
import { PessoaService } from './service/pessoa.service';
import { IMCService } from './service/imc.service';
import { IMCController } from './controller/imc.controller';

@Module({
  imports: [],
  controllers: [PessoaController, IMCController],
  providers: [...databaseProviders, PessoaService, IMCService],
})
export class AppModule {}
