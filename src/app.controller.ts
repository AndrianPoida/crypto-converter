import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetCoinsDataParams } from './app.dto';
import { GetCoinsDataResponse } from './app.response';
import { AppService } from './app.service';

@ApiTags('App')
@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/coins-data')
  @ApiOkResponse({
    type: [GetCoinsDataResponse],
  })
  async getCoinsData(
    @Query() params: GetCoinsDataParams
  ): Promise<GetCoinsDataResponse[]> {
    return this.appService.getCoinsData(params);
  }
}
