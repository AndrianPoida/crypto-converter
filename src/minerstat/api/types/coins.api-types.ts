export class MinerstatListCoinsDataParams {
  list: string[];
  algo?: string[];
}

export class MinerstatListCoinsDataParamsRaw {
  list: string;
  algo?: string;
}

export class MinerstatListCoinsDataResponse {
  id: string;
  coin: string;
  name: string;
  type: string;
  algorithm: string;
  network_hashrate: number;
  difficulty: number;
  reward: number;
  reward_unit: string;
  reward_block: number;
  price: number;
  volume: number;
  updated: number;
}