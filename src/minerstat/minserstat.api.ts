import { Injectable } from '@nestjs/common';
import { MinerstatCoinsApi } from './api';

@Injectable()
export class MinerstatApi {
  constructor(
    readonly coins: MinerstatCoinsApi,
  ) {}
}
