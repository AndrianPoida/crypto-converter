import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinerstatModule } from './minerstat/minerstat.module';

@Module({
  imports: [MinerstatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
