import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { IMCService } from '../service/imc.service';

@Controller()
export class IMCController {
  constructor(private readonly imcService: IMCService) {}

  @Get('/imc')
  root(): any {
    return this.imcService.readAll();
  }

  @Post('/imc')
  public createOne(@Body() body: any) {
    return body;
  }
}
