import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumberString,
} from 'class-validator';

export class GetCoinsDataParams {
  @ApiProperty({
    description: 'coin symbol',
  })
  @IsString()
  from: string;

  @ApiProperty({
    description: 'amount in base currency',
  })
  @IsNumberString()
  amount: number;
}