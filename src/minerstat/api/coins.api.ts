import { Injectable } from '@nestjs/common';
import { MinerstatApiClient } from './api-client.abstract';
import { MinerstatListCoinsDataParams, MinerstatListCoinsDataParamsRaw, MinerstatListCoinsDataResponse } from './types/coins.api-types';

@Injectable()
export class MinerstatCoinsApi extends MinerstatApiClient {
  constructor() {
    super('/coins');
  }

  public async getData(dto: MinerstatListCoinsDataParams): Promise<MinerstatListCoinsDataResponse[]> {
    const queryData: MinerstatListCoinsDataParamsRaw = {
      list: dto.list?.join(','),
      algo: dto.algo?.join(','),
    };
    return this.client.get<MinerstatListCoinsDataResponse[]>('', {
      params: queryData
    }).then((res) => res.data);
  }
}
