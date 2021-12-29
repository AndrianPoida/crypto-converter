import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsOptional,
} from 'class-validator';

export class GetCoinsDataParams {
  @ApiProperty({
    required: false,
    type: [String],
    description: 'List of crypto currencies',
    example: 'BTC,BCH,BSV',
  })
  @IsString({ each: true })
  @IsOptional()
  @Transform(({ value }) => value.split(',').map((x: string) => x.trim()))
  list?: string[];

  @ApiProperty({
    required: false,
    type: [String],
    description: 'List of algrorithms',
    example: 'SHA-256,Scrypt',
  })
  @IsString({ each: true })
  @IsOptional()
  @Transform(({ value }) => value.split(',').map((x: string) => x.trim()))
  algo?: string[];
}