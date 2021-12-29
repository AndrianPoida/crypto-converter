import { Injectable } from '@nestjs/common';
import { convertToQuery } from 'src/utils';
import { MinerstatApiClient } from './api-client.abstract';
import { MinerstatListCoinsDataParams, MinerstatListCoinsDataParamsRaw, MinerstatListCoinsDataResponse } from './types/coins.api-types';

@Injectable()
export class MinerstatCoinsApi extends MinerstatApiClient {
  constructor() {
    super('/');
  }

  public async getData(dto: MinerstatListCoinsDataParams): Promise<MinerstatListCoinsDataResponse[]> {
    const queryData: MinerstatListCoinsDataParamsRaw = {
      list: dto.list.join(','),
    };
    if (dto.algo) queryData.algo = dto.algo.join(',');
    const query = convertToQuery(queryData);
    return this.client.get<MinerstatListCoinsDataResponse[]>(`/coins?${query}`)
      .then((res) => res.data);
  }
}
