import { plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MinerstatListCoinsDataResponse } from './minerstat/api/types/coins.api-types';

export class GetCoinsDataResponse {
  @ApiProperty()
  coin: string;

  @ApiProperty()
  algorithm: string;

  @ApiProperty()
  price: number;

  static from(coinData: MinerstatListCoinsDataResponse) {
    return plainToClass(GetCoinsDataResponse, coinData, { enableImplicitConversion: true });
  }

  static map(
    payload: MinerstatListCoinsDataResponse[],
  ): GetCoinsDataResponse[] {
    return payload.map(item =>
      GetCoinsDataResponse.from(item),
    );
  }
}