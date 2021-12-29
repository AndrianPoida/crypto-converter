import { Expose, plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MinerstatListCoinsDataResponse } from './minerstat/api/types/coins.api-types';

export class GetCoinsDataResponse {
  @Expose()
  @ApiProperty()
  coin: string;

  @Expose()
  @ApiProperty()
  algorithm: string;

  @Expose()
  @ApiProperty()
  price: number;

  static from(
    coinData: MinerstatListCoinsDataResponse,
  ): GetCoinsDataResponse {
    return plainToClass(GetCoinsDataResponse, coinData, {
      enableImplicitConversion: true,
      excludeExtraneousValues: true,
    });
  }

  static map(
    payload: MinerstatListCoinsDataResponse[],
  ): GetCoinsDataResponse[] {
    return payload.map(item =>
      GetCoinsDataResponse.from(item),
    );
  }
}