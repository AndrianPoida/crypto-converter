import { Injectable } from '@nestjs/common';
import { GetCoinsDataParams } from './app.dto';
import { GetCoinsDataResponse } from './app.response';
import { MinerstatApi } from './minerstat/minserstat.api';

@Injectable()
export class AppService {
  constructor(
    private readonly minerstatApi: MinerstatApi,
  ) {}

  async getCoinsData(payload: GetCoinsDataParams): Promise<GetCoinsDataResponse> {
    const coinsData = await this.minerstatApi.coins.getData({
      list: [payload.from],
    });
    const result = (coinsData[0]?.price ?? 0) * payload.amount;
    const parsedResult = parseFloat(result.toFixed(2));
    return GetCoinsDataResponse.from(payload, parsedResult);
  }
}
