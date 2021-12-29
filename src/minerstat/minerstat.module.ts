import { Module } from '@nestjs/common';
import { MinerstatCoinsApi } from './api/coins.api';
import { MinerstatApi } from './minserstat.api';

@Module({
  providers: [MinerstatCoinsApi, MinerstatApi],
  exports: [MinerstatApi],
})
export class MinerstatModule {}
