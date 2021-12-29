import { ApiProperty } from '@nestjs/swagger';
import { Type, Transform } from 'class-transformer';
import {
  IsArray,
  IsString,
  ArrayMinSize,
  IsOptional,
} from 'class-validator';

export class GetCoinsDataParams {
  @ApiProperty({
    required: false,
    type: [String],
    description: 'List of crypto currencies',
    example: 'BTC,BCH,BSV',
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @Type(() => String)
  @IsOptional()
  @Transform(({ value }) => value.split(',').map((x: string) => x.trim()))
  list?: string[];

  @ApiProperty({
    required: false,
    type: [String],
    description: 'List of algrorithms',
    example: 'SHA-256,Scrypt',
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @Type(() => String)
  @IsOptional()
  @Transform(({ value }) => value.split(',').map((x: string) => x.trim()))
  algo?: string[];
}