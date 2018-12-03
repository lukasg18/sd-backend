import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';

@Controller()
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get('/pessoa')
  root(): any {
    return this.pessoaService.readAll();
  }

  @Post('/pessoa')
  public createOne(@Body() body: any) {
    return this.pessoaService.Create(body);
  }
}
