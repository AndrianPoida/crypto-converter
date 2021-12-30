import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetCoinsDataParams } from './app.dto';
import { GetCoinsDataResponse } from './app.response';
import { AppService } from './app.service';

@ApiTags('converter')
@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/convert')
  @ApiOperation({
    summary: 'Convert Cryto Currency to USD',
    operationId: 'convert-currency',
    description: 'Convert amount to USD',
  })
  @ApiOkResponse({
    type: [GetCoinsDataResponse],
    description: 'OK',
  })
  async getCoinsData(
    @Query() params: GetCoinsDataParams
  ): Promise<GetCoinsDataResponse> {
    return this.appService.getCoinsData(params);
  }
}
