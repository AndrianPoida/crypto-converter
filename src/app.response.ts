import { ApiProperty } from '@nestjs/swagger';
import { getCoinsDataExampleResponse } from './faker';
import * as moment from 'moment';

class GetCoinsDataInputParams {
  @ApiProperty({ example: getCoinsDataExampleResponse.query.from })
  from: string;

  @ApiProperty({ example: getCoinsDataExampleResponse.query.amount })
  amount: number;
}

export class GetCoinsDataResponse {
  @ApiProperty({ example: getCoinsDataExampleResponse.success })
  success: boolean;

  @ApiProperty()
  query: GetCoinsDataInputParams;

  @ApiProperty({ example: getCoinsDataExampleResponse.date })
  date: string;

  @ApiProperty({ example: getCoinsDataExampleResponse.result })
  result: number;

  static from(
    query: GetCoinsDataInputParams,
    result: number,
  ): GetCoinsDataResponse {
    return {
      success: true,
      query,
      result,
      date: moment().format('YYYY-MM-DD'),
    }
  }
}